import React, { Component } from "react";
import styled from "styled-components";
// import { Button } from "reactstrap";

const Button = styled.button`
  padding: 10px;
  background: #4c546f;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    background: white;
    color: #e34a6f;
  }
`;
class LoginForm extends Component {
  render() {
    return (
      <div className=" LoginForm">
        <a
          href={
            window.location.hostname === "localhost"
              ? "http://localhost:4000/auth/google"
              : "https://sleepsta.herokuapp.com/auth/google"
          }
        >
          {/* <button>Login with Google</button> */}
          <Button>Login with Google </Button>
        </a>
      </div>
    );
  }
}

export default LoginForm;
