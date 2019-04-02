import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Profile.css";
import Notifications, { notify } from "../Notifications/index";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      f_name: "",
      l_name: "",
      update: 0
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
        update: 0
      });
    }
  };

  render() {
    console.log("while rendering", this.props.inputs);
    console.log(localStorage);

    return (
      <div className="profile">
        <div className="userInfo">
          <h6>Email</h6>
          <p>{this.props.inputs.email}</p>
          <h6>First Name</h6>
          <p>{this.props.inputs.f_name}</p>
          <h6>Last Name</h6>
          <p>{this.props.inputs.l_name}</p>
          <h6>Account Type</h6>
          <p>{this.props.inputs.account_type}</p>
        </div>
        <Button color="danger" onClick={this.toggle}>
          Edit Profile
        </Button>

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
                <Label className="label">First name</Label>
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
                <Label className="label">Last name</Label>
                <Input
                  type="text"
                  name="l_name"
                  value={this.state.l_name}
                  placeholder={this.props.inputs.l_name}
                  onChange={this.handleChanges}
                />
              </div>
              <br />
              <span className="span">
                Please do not leave blank. You may use the same name.
              </span>

              <br />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.handleSubmit}
              onMouseUp={() => notify("notif")}
            >
              Update
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
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
