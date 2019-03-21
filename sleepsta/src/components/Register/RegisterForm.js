import React from "react";

class RegisterForm extends React.component {
  state = {
    email: "",
    f_name: "",
    l_name: "",
    password: ""
  };

  handleInputChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    <div>
      <form>
        <input
          type="text"
          placeholder="first name"
          name="f_name"
          onChange={this.handleInputChanges}
        />
        <input
          type="text"
          placeholder="last name"
          name="l_name"
          onChange={this.handleInputChanges}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={this.handleInputChanges}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.handleInputChanges}
        />
      </form>
    </div>;
  }
}

export default RegisterForm;
