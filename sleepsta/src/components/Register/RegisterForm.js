import React, { Component } from "react";
import { connect } from "react-redux";
import registerUser from "../../actions/index";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      f_name: "",
      l_name: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      f_name: this.state.f_name,
      l_name: this.state.l_name
    };
    console.log(newUser);
    this.props.registerUser(newUser);
    this.setState({
      email: "",
      password: ""
    });
  };

  // toApp
  // this.props.history

  render() {
    return (
      <div className="registerForm">
        <label>Register Page</label>
        <form>
          <div className="emailDiv">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.props.email}
              placeholder="Email"
              onChange={this.props.handleChanges}
            />
          </div>
          <div className="passwordDiv">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={this.props.password}
              placeholder="Password"
              onChange={this.props.handleChanges}
            />
          </div>
          <div className="fNameDiv">
            <label>First Name</label>
            <input
              type="text"
              name="f_name"
              value={this.props.f_name}
              placeholder="First Name"
              onChange={this.props.handleChanges}
            />
          </div>
          <div className="lNameDiv">
            <label>Last Name</label>
            <input
              type="text"
              name="l_name"
              value={this.props.l_name}
              placeholder="Last Name"
              onChange={this.props.handleChanges}
            />
          </div>
          <button onClick={this.handleSubmit}>Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistering: this.state.isRegistering
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
