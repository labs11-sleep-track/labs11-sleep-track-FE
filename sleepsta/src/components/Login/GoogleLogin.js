import React, { Component } from "react";

class GoogleLogin extends Component {
  render() {
    return (
      <div className=" GoogleLogin">
        <a
          href={
            window.location.hostname === "localhost"
              ? "http://localhost:4000/auth/google"
              : "https://sleepsta.herokuapp.com/auth/google"
          }
        >
          <button>Login with Google</button>
        </a>
      </div>
    );
  }
}

export default GoogleLogin;
