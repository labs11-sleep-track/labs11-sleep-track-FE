import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/index";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
      password: "",
      f_name: "",
      l_name: ""
    });
  };

  // toApp
  // this.props.history

  render() {
    return (
      <div className="registerForm">
        <h2>Register</h2>
        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="f_name"
              value={this.state.f_name}
              placeholder="First Name"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="l_name"
              value={this.state.l_name}
              placeholder="Last Name"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <Button color="success" onClick={this.handleSubmit}>
            Register
          </Button>

          <div>
            <p>
              Already have an account?
              <span>
                <Link to="/"> Login</Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
