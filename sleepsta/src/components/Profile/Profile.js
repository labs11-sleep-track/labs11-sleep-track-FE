import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";
import UserForm from "./UpdateUserForm";
// import axios from "axios";

class Profile extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.inputs);
    return (
      <div>
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
        <UserForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.auth.inputs
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(Profile);
