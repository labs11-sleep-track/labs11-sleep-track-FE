import React from "react";
import styled from "styled-components";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterAll = styled.div`
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  background-color: rgb(255, 255, 255, 0.09);
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid grey;
  width: 190px;

  @media (min-width: 1920px) {
    width: 250px;
  }

  @media (max-width: 800px) {
    width: 200px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 10px;

  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 700px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const TextSleep = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 10px;

  &:hover {
    color: #e34a6f;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 700px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <FooterAll>
        <Text>ALL CONTENT © 2019 SLEEPSTA. ALL RIGHTS RESERVED</Text>

        <TextSleep>
          <Link to="/about">SITE DESIGNED + DEVELOPED BY SLEEPSTA TEAM</Link>
        </TextSleep>
      </FooterAll>
    );
  }
}
