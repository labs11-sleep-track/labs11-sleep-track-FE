import React from 'react';
import styled from 'styled-components'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import { Route, withRouter} from 'react-router-dom';

import LoginForm from '../Login/LoginForm';
import Register from '../Register/RegisterForm';
import UserForm from '../Profile/UpdateUserForm';
import Profile from '../Profile/Profile';
// import Blogs from './blogs/Blogs';
// import About from './about/About';

const NavBar = styled.div`
background-color: #252E4F;
`

const Title = styled.div`
font-size: 75px;
letter-spacing: 5px;
font-weight: bold;
font-family: Roboto;
color: white;
cursor: pointer;
text-shadow: 2px 2px 8px black;

&:hover { 
  color: #9EE493;
  text-decoration: none;
}

&:active {
  color: #E34A6F;
  text-decoration: none;
}
`

const Links = styled.p`
    color: #F7F7FF;
    font-family: Roboto;
    letter-spacing: 3px;
    font-size: 25px;
    padding-top: 25px;
    text-shadow: 2px 2px 8px black; 

&:hover { 
  color: #9EE493;
  text-decoration: none;
}

&:active {
  color: #E34A6F;
  text-decoration: none;
}
`

const Menu = styled.div`
font-size: 20px;
font-weight: bold;
letter-spacing: 2px;
font-family: Roboto;
color: black;
cursor: pointer;
text-decoration: none;

&:hover { 
  color: #9EE493;
  text-decoration: none;
}

&:active {
  color: #E34A6F;
  text-decoration: none;
}
`

const Spacer = styled.div`
font-size: 45px;
font-weight: lighter;
padding-top: 20px;
font-family: Roboto;
color: white;
cursor: pointer;
text-shadow: 2px 2px 8px black;
}
`

class LoggedOutNav extends React.Component {
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
      <NavBar>
        <Navbar color="#4C546F" light expand="md">

        <NavLink href='/'>
        <Title>
        SLEEP<i>STA</i>
        </Title>
        </NavLink>
       

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/whysleep">
                <Links>Why Sleep?</Links>
                </NavLink>
              </NavItem>

              <Spacer>&nbsp;|&nbsp;</Spacer>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Links>Menu</Links>
                </DropdownToggle>

                <DropdownMenu right>

                <DropdownItem>
                  <Link style={{textDecoration: "none"}} to="/login">
                  <Menu>
                  <i class="fas fa-user"></i>&nbsp; 
                    Login
                    </Menu>
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                  <Link style={{textDecoration: "none"}} to="/register">
                  <Menu>
                  <i class="fas fa-user-plus"></i>&nbsp; 
                    Register
                    </Menu>
                    </Link>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem>
                  <Link style={{textDecoration: "none"}} to="/about">
                  <Menu>
                  <i class="fas fa-bed"></i>&nbsp;
                    SLEEP<i>STA</i> Team
                    </Menu>
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                  <Menu>
                  <i onClick={this.logout} class="fas fa-sign-out-alt">&nbsp;Logout</i>
                  </Menu>
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <main>
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/register" component={Register} />  */}
          <Route path="/update" component={UserForm} /> 
          {/* <Route path="/profile" component={Profile} />  */}
          {/* <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />   */}
        </main>
      </NavBar>
    );
  }

logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(LoggedOutNav);