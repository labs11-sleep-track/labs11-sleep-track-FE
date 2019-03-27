import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      curEmail: "",
      curPassword: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.curEmail,
      password: this.state.curPassword
    };
    this.props.loginUser(user);
    this.setState({
      curEmail: "",
      curPassword: ""
    });
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/profile" />;
    }
    if (this.props.isLoggingIn) {
      return (
        <>
          <h2>Logging In</h2>
        </>
      );
    }
    return (
      <div className="loginForm">
        <h2>Login</h2>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              id="curEmail"
              name="curEmail"
              value={this.state.curEmail}
              required
              onChange={this.handleChange}
              placeholder="Type email here"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              id="curPassword"
              name="curPassword"
              value={this.state.curPassword}
              required
              onChange={this.handleChange}
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Button color="success">Submit</Button>
            <br />
            <br />
            <h6>Don't have an account?</h6>

            <Link to="/register">
              {" "}
              <Button> Register</Button>
            </Link>
          </FormGroup>
        </Form>
        <a href="https://sleepsta.herokuapp.com/auth/google">
          <button>Login with Google</button>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isLoggingIn: state.auth.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(LoginForm);
