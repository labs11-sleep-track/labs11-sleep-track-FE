import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from './sleep.png';
import styled from "styled-components";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./SideBarNav.css";

const NavAll = styled.div`
  background: #4c546f;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Roboto", sans-serif;

@media (min-width: 500px) {
  display: none;
}
    
@media (max-width: 500px) {
background: #4c546f;
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-family: "Roboto", sans-serif;
margin-bottom: 10px;
}

`;

const Title = styled.h2`
font-size: 25px;
padding-top: 20px;
padding-left: 20px;
display: flex;
text-align: center;
color: white;
font-family: "Roboto", sans-serif;
width: 100%;
cursor: pointer;
`

const Links = styled.div `
font-size: 20px;
padding-top: 20px;
padding-bottom: 10px;
border-top: 2px solid #252E4F;
display: flex;
justify-content: center;
cursor: pointer;

`

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
    return (
      <NavAll>
        <Navbar className="navBarMobile" color="faded" light>
        {/* <NavbarBrand className="navBarBrand" href="/dashboard" className="mr-auto"><Title>SLEEPSTA</Title></NavbarBrand>  */}

          <NavbarBrand href="/dashboard" className="mr-auto"><Title>SLEEPSTA</Title></NavbarBrand> 
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> 
          {/*<NavbarToggler onClick={this.toggleNavbar} className="mr-2"><img src={logo} alt="sleep"></img></NavbarToggler> */}
          <Collapse isOpen={!this.state.collapsed} navbar>
            
            <Nav navbar>
            <br />
              <NavItem>
                  <Link style={{textDecoration: "none"}} to="/dashboard">
                            <Links><i class="fas fa-chart-bar"></i>&nbsp;&nbsp;Dashboard</Links>
                  </Link>
              </NavItem>
              <br/>
              <NavItem>
                   <Link style={{textDecoration: "none"}} to="/blogs">
                            <Links><i className="fas fa-bed"></i>&nbsp;&nbsp;Sleep Blogs</Links>
                   </Link>
              </NavItem>
              <br/>
              <NavItem>
                  <Link style={{textDecoration: "none"}} to="/profile">
                            <Links><i class="fas fa-user"></i>&nbsp;&nbsp;Profile</Links>
                  </Link>
              </NavItem>
              <br/>
              <NavItem>
                  <Link style={{textDecoration: "none"}} to="/premium">
                            <Links><i className="fas fa-dollar-sign"></i>&nbsp;&nbsp;Payment</Links>
                  </Link>
              </NavItem>
    
            </Nav>
          </Collapse>
        </Navbar>
      </NavAll>
    );
  }
}

export default withRouter(MobileNav);