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

import './SideBarNav.css';

import LoginForm from '../Login/LoginForm';
import Register from '../Register/RegisterForm';
import UserForm from '../Profile/UpdateUserForm';
import Profile from '../Profile/Profile';
// import Blogs from './blogs/Blogs';
// import About from './about/About';

class SideNav extends React.Component {
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

<div class="wrapper">

    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>SLEEPSTA</h3>
        </div>

        <ul class="list-unstyled components">
        
            <p>Sleep Harder. 
                <br/>
            Live Smarter.</p>
            
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Why Sleep?</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                    <NavItem>
                        <NavLink href="/whysleep">
                        <div><i class="fas fa-plus"></i>&nbsp;&nbsp;Learn More</div>
                        </NavLink>
                    </NavItem>
                    </li>
                </ul>
            </li>

            {/* <li>
                <a href="#">About</a>
            </li> */}

            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Account</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <Link style={{textDecoration: "none"}} to="/login">
                        <div><i class="fas fa-user"></i>&nbsp;&nbsp;Login</div>
                        </Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: "none"}} to="/register">
                        <div>
                        <i class="fas fa-user-plus"></i>&nbsp;&nbsp;Register</div>
                        </Link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Contact</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                    <Link style={{textDecoration: "none"}} to="/about">
                    <div><i class="fas fa-bed"></i>&nbsp;&nbsp;SLEEP<i>STA</i> Team</div>
                    </Link>
                    </li>
                </ul>
            </li>
        
            <li>
                  <div>
                  <a onClick={this.logout}>Logout</a>
                  </div>
            </li>
        </ul>
    </nav>

    <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>&nbsp;Menu</span>
            </button>

        </div>
        
    </nav>
</div>

<main>
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/register" component={Register} />  */}
          <Route path="/update" component={UserForm} /> 
          {/* <Route path="/profile" component={Profile} />  */}
          {/* <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />   */}
        </main>

</div>

)}

logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(SideNav);

