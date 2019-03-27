import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/index";
import axios from "axios";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      f_name: "",
      l_name: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newInfo = {
      email: this.state.email,
      f_name: this.state.f_name,
      l_name: this.state.l_name
    };
    this.props.updateUser(newInfo);
    this.setState({
      email: "",
      f_name: "",
      l_name: ""
    });
  };

  render() {
    return (
      <div>
        <label>Update User Info</label>
        <form>
          <div className="emailDiv">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChanges}
            />
          </div>

          <div className="fNameDiv">
            <label>First Name</label>
            <input
              type="text"
              name="f_name"
              value={this.state.f_name}
              placeholder="First Name"
              onChange={this.handleChanges}
            />
          </div>

          <div className="lNameDiv">
            <label>Last Name</label>
            <input
              type="text"
              name="l_name"
              value={this.state.l_name}
              placeholder="Last Name"
              onChange={this.handleChanges}
            />
          </div>
          <button onClick={this.handleSubmit}>Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { updateUser }
)(UserForm);
