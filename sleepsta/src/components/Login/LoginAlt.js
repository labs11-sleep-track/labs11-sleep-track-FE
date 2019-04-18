import React, { Component } from "react";
import styled from "styled-components";
import normalImage from "./images/btn_google_signin_dark_normal_web.png";
import pressedImage from "./images/btn_google_signin_dark_pressed_web.png";
import focusImage from "./images/btn_google_signin_dark_focus_web.png";

const GoogleButton = styled.div`
  width: 160px;
  height: 39px;
  background-repeat: none;
  background-position: center;
  background-size: cover;
  background-image: url(${normalImage});

  :active {
    background-image: url(${pressedImage});
  }

  :focus {
    background-image: url(${focusImage});
  }
`;

class LoginAlt extends Component {
  render() {
    return (
      <div className=" LoginAlt">
        <a
          href={
            window.location.hostname === "localhost"
              ? "http://localhost:4000/auth/google"
              : "https://sleepsta.herokuapp.com/auth/google"
          }
        >
          <GoogleButton />
        </a>
      </div>
    );
  }
}

export default LoginAlt;
