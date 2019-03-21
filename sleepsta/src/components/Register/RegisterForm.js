import React from "react";

class RegisterForm extends React.Component {
  state = {
    email: "",
    f_name: "",
    l_name: "",
    password: ""
  };

  handleInputChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
