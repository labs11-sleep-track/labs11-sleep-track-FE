import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            curEmail: '',
            curPassword: ''
        }
    }


    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(e) {
        e.preventDefault();
        let user = {
          curEmail: this.state.email,
          curPassword: this.state.password
        };
        console.log(user);
        //LOGIN FUNCTION HERE
        this.setState({
          curEmail: '',
          curPassword: ''
        });
    }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
        <label>Email:</label>
        <input type="email" 
               id="curEmail" 
               name="curEmail" 
               value={this.state.curEmail} 
               required 
               placeholder="Type email here" />
        <input type="password"
                id="curPassword" 
                name="curPassword" 
                value={this.state.curPassword} 
                required 
               placeholder="Password"></input>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}
