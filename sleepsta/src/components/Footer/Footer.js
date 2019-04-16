import React from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const FooterAll = styled.div`
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  background-color: rgb(255, 255, 255, 0.09);
  position: relative;
  bottom: 0;
  border-top: 1px solid #e34a6f;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 800px) {
    height: 50%;
    color: white;
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 500px) {
    height: 50%;
    color: white;
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }
`;

const Text = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 5px;
  display: flex;
  justify-content: center;

  @media (min-width: 1920px) {
    width: 49%;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
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
    display: flex;
    justify-content: center;
  }
`;

const TextSleep = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 5px;

  &:hover {
    color: #e34a6f;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 500px) {
    display: none;
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
        <Navbar expand="md">
          <Text>ALL CONTENT © 2019 SLEEPSTA. ALL RIGHTS RESERVED</Text>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <TextSleep>
                <NavLink href="/about">
                  SITE DESIGNED + DEVELOPED BY SLEEPSTA TEAM
                </NavLink>
              </TextSleep>
            </NavItem>
          </Nav>
        </Navbar>
      </FooterAll>
    );
  }
}
