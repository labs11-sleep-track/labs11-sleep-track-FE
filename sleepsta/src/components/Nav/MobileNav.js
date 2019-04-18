import React from "react";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./SideBarNav.css";

const NavAll = styled.div`
  background-color: #222d44;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Poppins";

  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins", sans-serif;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  text-align: center;
  color: white;
  font-family: "Poppins";
  font-weight: bold;
  letter-spacing: 3px;
  width: 100%;
  cursor: pointer;
  padding-bottom: 20px;
  &:hover {
    color: #e34a6f;
  }
`;

const Links = styled.div`
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid #070f1e;
  display: flex;
  justify-content: center;
  font-family: "Poppins";
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    color: #e34a6f;
    background-color: white;
  }
`;

const Hamburger = styled.i`
  font-size: 30px;
  margin-right: 20px;
`;
class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    //if the user has a logged in token they will see this mobile nav
    if (localStorage.getItem("jwt")) {
      return (
        <NavAll>
          <Navbar className="navBarMobile" color="faded" light>

            <NavbarBrand href="/dashboard" className="mr-auto">
              <Title>SLEEPSTA</Title>
            </NavbarBrand>
            <div onClick={this.toggleNavbar}>
              <Hamburger className="fas fa-bars" />
            </div>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <a style={{ textDecoration: "none" }} href="/dashboard">
                    <Links>
                      <i className="fas fa-chart-bar" />
                      &nbsp;&nbsp;Dashboard
                    </Links>
                  </a>
                </NavItem>

                <NavItem>
                  <Link style={{ textDecoration: "none" }} to="/blogs">
                    <Links>
                      <i className="fas fa-bed" />
                      &nbsp;&nbsp;Sleep Blogs
                    </Links>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link style={{ textDecoration: "none" }} to="/profile">
                    <Links>
                      <i className="fas fa-user" />
                      &nbsp;&nbsp;Account
                    </Links>
                  </Link>
                </NavItem>

                <NavItem>
                  <Links>
                    <a onClick={this.logout}>
                      <i className="fas fa-sign-out-alt" />
                      &nbsp;&nbsp;Logout
                    </a>
                  </Links>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </NavAll>
      );
    } else {
      return (
        // if the user does not have a token they will see this mobile nav
        <NavAll>
          <Navbar className="navBarMobile" color="faded" light>

            <NavbarBrand href="/" className="mr-auto">
              <Title>SLEEPSTA</Title>
            </NavbarBrand>
            <div onClick={this.toggleNavbar}>
              <Hamburger className="fas fa-bars" />
            </div>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <br />
                <NavItem>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <Links>
                      <i className="fas fa-user" />
                      &nbsp;Sign In
                    </Links>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    <Links>
                      <i className="fas fa-bed" />
                      &nbsp;About Us
                    </Links>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link style={{ textDecoration: "none" }} to="/privacy">
                    <Links>
                      <i className="fas fa-user-shield" />
                      &nbsp;Privacy Policy
                    </Links>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </NavAll>
      );
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };
}

export default withRouter(MobileNav);
