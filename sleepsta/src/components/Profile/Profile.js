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

import "./Profile.css";
import Notifications, { notify } from "../Notifications/index";
import styled from "styled-components";

const DarkCard = styled(Card)`
  font-weight: bold;
  background-color: rgb(255, 255, 255, 0.12);
  padding: 10px;
  margin: 0 auto;
  width: 90%;
`;

const CardTitle = styled.div`
  font-size: 26px;
  @media (max-width: 800px) {
    font-size: 26px;
  }
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const CardText = styled.p`
  font-size: 16px;
  color: white;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const PinkButton = styled(Button)`
  background: #e34a6f;
  color: white;
  &:hover {
    background: white;
    color: #e34a6f;
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

  componentDidMount() {
    this.props.getUser();
    console.log("while mounting", this.props.inputs);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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

  render() {
    console.log("while rendering", this.props.inputs);
    // console.log(localStorage);
    // console.log(document.getElementsByClassName("notif"));
    return (
      <div className="profile">
        <DarkCard>
          <CardBody>
            <CardTitle>Profile </CardTitle>
            <hr />
            <CardText>
              <h6>Email: {this.props.inputs.email}</h6>

              <h6>First Name: {this.props.inputs.f_name}</h6>

              <h6>Last Name: {this.props.inputs.l_name}</h6>

              <h6>Account Type: {this.props.inputs.account_type}</h6>
              <br />
              <PinkButton onClick={this.toggle}>Edit Profile</PinkButton>
            </CardText>
          </CardBody>
        </DarkCard>

        {/* <div className="userInfo">
          <br />
          <div className="box">
            <h6>Email:</h6>
            <p className="item">{this.props.inputs.email}</p>
          </div>

          <br />
          <div className="box">
            <h6>First Name:</h6>
            <p>{this.props.inputs.f_name}</p>
          </div>
          <br />

          <div className="box">
            <h6>Last Name:</h6>
            <p>{this.props.inputs.l_name}</p>
          </div>
          <br />

          <div className="box">
            <h6>Account Type:</h6>
            <p>{this.props.inputs.account_type}</p>
          </div>
          <br />
        </div>
        <div className="butn">
          <Button color="primary" onClick={this.toggle}>
            Edit Profile
          </Button>
        </div> */}

        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} className="header">
            Update User Form
          </ModalHeader>

          <ModalBody>
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

            {/* {this.state.update ? (
              <p className="fail">Failed to update profile.</p>
            ) : null} */}

            <br />

            <PinkButton
              onClick={this.handleSubmit}
              onMouseUp={() => notify("notif")}
            >
              Update
            </PinkButton>

            <PinkButton onClick={this.toggle}>Cancel</PinkButton>
          </ModalBody>
        </Modal>

        <div className="notif">
          <Notifications update={this.state.update} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.auth.inputs,
    isUpdated: state.auth.isUpdated
  };
};

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(Profile);
