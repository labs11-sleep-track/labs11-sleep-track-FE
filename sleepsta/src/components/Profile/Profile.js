import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions";
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input
} from "reactstrap";
import Stripe from "../Premium/Stripe";
import "./Profile.css";
import Notifications, { notify } from "../Notifications/index";
import styled from "styled-components";

const DarkCard = styled(Card)`
  background-color: rgb(255, 255, 255, 0.09);
  padding: 10px;
  margin: 15px auto;
  width: 90%;
  border: none;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CardTitle = styled.div`
  font-size: 24px;
  @media (max-width: 1920px) {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: white;
  letter-spacing: 1px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled(ModalHeader)`
  border: none;
`;

const XButton = styled(Button)`
  background: transparent;
  border: transparent;
  color: white;
  font-size: 24px;
  margin: 0 1rem;
  padding: 0;
  :hover {
    cursor: pointer;
    background: transparent;
    border: transparent;
    color: #e34a6f;
  }
`;

const Body = styled(ModalBody)`
  border-top: 1px solid #e34a6f;
  padding: 1rem 0;
  margin: 0 1rem;
`;

const PinkButton = styled(Button)`
  background: #e34a6f;
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 125px;
  border: none;

  &:hover {
    background: white;
    color: #e34a6f;
  }
`;

const ProfilePremium = styled.div`
  max-width: 75%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 500px) {
    margin: 0 20px;
  }
`;

const FooterAll = styled.div`
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #3f4454;
  position: relative;
  bottom: 0;
  left: 0;
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-around;
  max-width: 100%;

  @media (max-width: 800px) {
    text-align: center;
  }
  @media (min-width: 500px) {
    display: none;
  }
`;

const FooterPremium = styled.div`
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  background-color: #3f4454;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 800px) {
    text-align: center;
  }
  @media (min-width: 500px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 10px;

  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 700px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      f_name: "",
      l_name: "",
      update: null
    };

    this.toggle = this.toggle.bind(this);
  }

  // gets user account info
  componentDidMount() {
    this.props.getUser();
  }

  // toggles display for pop-up modal form
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // input changes on form
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // submits update request form
  handleSubmit = e => {
    e.preventDefault();
    const user = {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      id: this.props.inputs.id
    };
    if (!user.f_name || !user.l_name) {
      this.setState({
        update: 1
      });
    } else {
      this.props.updateUser(user);
      this.setState({
        f_name: "",
        l_name: ""
      });
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
      this.props.getUser();
      this.setState({
        update: null
      });
      this.toggle();
    }
    this.toggle();
  };

  //display 1 of two options, depending on account type, either free or premium
  render() {
    if (this.props.inputs.account_type === "premium") {
      // for premium users, does not contain stripe form
      return (
        <ProfilePremium>
          <DarkCard className="black">
            <CardBody>
              <CardTitle>Profile </CardTitle>
              <hr />
              <CardText>
                <h6>Email: {this.props.inputs.email}</h6>
                <br />
                <h6>First Name: {this.props.inputs.f_name}</h6>
                <br />
                <h6>Last Name: {this.props.inputs.l_name}</h6>
                <br />
                <h6>Account Type: {this.props.inputs.account_type}</h6>
                <br />
                <PinkButton onClick={this.toggle}>Edit Profile</PinkButton>
              </CardText>
            </CardBody>
          </DarkCard>

          <Modal
            isOpen={this.state.modal}
            fade={false}
            toggle={this.toggle}
            className={this.props.className}
          >
            <HeaderContainer>
              <Header className="header">Update User Form</Header>
              <XButton onClick={this.toggle}>X</XButton>
            </HeaderContainer>
            <Body>
              <Form>
                <div className="fNameDiv">
                  <Label className="label">First Name *</Label>
                  <Input
                    type="text"
                    name="f_name"
                    value={this.state.f_name}
                    placeholder={this.props.inputs.f_name}
                    onChange={this.handleChanges}
                  />
                </div>
                <br />
                <div className="lNameDiv">
                  <Label className="label">Last Name *</Label>
                  <Input
                    type="text"
                    name="l_name"
                    value={this.state.l_name}
                    placeholder={this.props.inputs.l_name}
                    onChange={this.handleChanges}
                  />
                </div>
              </Form>
              <br />
              <br />
              <PinkButton
                onClick={this.handleSubmit}
                onMouseUp={() => notify("notif")}
              >
                Update
              </PinkButton>

              <PinkButton onClick={this.toggle}>Cancel</PinkButton>
            </Body>
          </Modal>

          <div className="notif">
            <Notifications update={this.state.update} />
          </div>
          <FooterPremium>
            <Text>ALL CONTENT © 2019 SLEEPSTA. ALL RIGHTS RESERVED</Text>
          </FooterPremium>
        </ProfilePremium>
      );
    } else {
      // for free users, contains stripe form for account upgrade
      return (
        <div className="profile">
          <DarkCard className="black">
            <CardBody>
              <CardTitle>Profile </CardTitle>
              <hr />
              <CardText>
                <h6>Email: {this.props.inputs.email}</h6>
                <br />
                <h6>First Name: {this.props.inputs.f_name}</h6>
                <br />
                <h6>Last Name: {this.props.inputs.l_name}</h6>
                <br />
                <h6>Account Type: {this.props.inputs.account_type}</h6>
                <br />
                <PinkButton onClick={this.toggle}>Edit Profile</PinkButton>
              </CardText>
            </CardBody>
          </DarkCard>

          {/* Pop-up form for updating user profile */}
          <Modal
            isOpen={this.state.modal}
            fade={false}
            toggle={this.toggle}
            className={this.props.className}
          >
            <HeaderContainer>
              <Header className="header">Update User Form</Header>
              <XButton onClick={this.toggle}>X</XButton>
            </HeaderContainer>

            <Body>
              <Form>
                <div className="fNameDiv">
                  <Label className="label">First Name *</Label>
                  <Input
                    type="text"
                    name="f_name"
                    value={this.state.f_name}
                    placeholder={this.props.inputs.f_name}
                    onChange={this.handleChanges}
                  />
                </div>
                <br />
                <div className="lNameDiv">
                  <Label className="label">Last Name *</Label>
                  <Input
                    type="text"
                    name="l_name"
                    value={this.state.l_name}
                    placeholder={this.props.inputs.l_name}
                    onChange={this.handleChanges}
                  />
                </div>
              </Form>
              <br />
              <br />
              <PinkButton
                onClick={this.handleSubmit}
                onMouseUp={() => notify("notif")}
              >
                Update
              </PinkButton>

              <PinkButton onClick={this.toggle}>Cancel</PinkButton>
            </Body>
          </Modal>

          {/* Off-screen notification, notifies user if successful or failed update */}
          <div className="notif">
            <Notifications update={this.state.update} />
          </div>

          {/* Stripe form */}
          <DarkCard className="black">
            <CardBody>
              <CardTitle>Upgrade?</CardTitle>
              <hr />
              <CardText>
                Get access to premium features.
                <br />
                <br />
                See your sleep data in a monthly chart.
                <br />
                <br />
                One time fee of $10 USD.
                <br />
                <br />
              </CardText>
              <Stripe />
            </CardBody>
          </DarkCard>
          <FooterAll>
            <Text>ALL CONTENT © 2019 SLEEPSTA. ALL RIGHTS RESERVED</Text>
          </FooterAll>
        </div>
      );
    }
  }
}

// access to account info
const mapStateToProps = state => {
  return {
    inputs: state.auth.inputs
  };
};

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(Profile);
