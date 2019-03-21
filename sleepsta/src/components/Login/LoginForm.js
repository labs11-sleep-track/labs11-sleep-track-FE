import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

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
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Email:</label>
          <input
            type="email"
            id="curEmail"
            name="curEmail"
            value={this.state.curEmail}
            required
            onChange={this.handleChange}
            placeholder="Type email here"
          />
          <input
            type="password"
            id="curPassword"
            name="curPassword"
            value={this.state.curPassword}
            required
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(LoginForm);
