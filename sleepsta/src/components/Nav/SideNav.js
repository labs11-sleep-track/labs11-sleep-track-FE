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

// import LoginForm from '../Login/LoginForm';
// import Register from '../Register/RegisterForm';
// import UserForm from '../Profile/UpdateUserForm';
// import Profile from '../Profile/Profile';
// import Blogs from './blogs/Blogs';
// import About from '../About/About';

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

<div id="content">
    <nav id="menuButton" class="navbar navbar-expand-lg navbar-light ">

        <div class="container-fluid">


            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>&nbsp;Menu</span>
            </button>

        </div>
        
    </nav>
</div>


    <nav id="sidebar">
        <div class="sidebar-header">
        <NavLink href='/'>
        <div className="sleepTitle">
        SLEEP<i>STA</i>
        </div>
        </NavLink>
        </div>

        <ul class="list-unstyled components">
        
        <div className="catchPhrase">
            <p>Sleep Harder. Live Smarter.</p>
            </div>
            
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Why Sleep?</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                    <NavItem>
                        <NavLink href="/whysleep">
                        <div><i className="fas fa-plus"></i>&nbsp;&nbsp;Learn More</div>
                        </NavLink>
                    </NavItem>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Account</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <Link style={{textDecoration: "none"}} to="/">
                        <div><i className="fas fa-user"></i>&nbsp;&nbsp;Login</div>
                        </Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: "none"}} to="/register">
                        <div>
                        <i className="fas fa-user-plus"></i>&nbsp;&nbsp;Register</div>
                        </Link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#pageTwoSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Contact</a>
                <ul class="collapse list-unstyled" id="pageTwoSubmenu">
                    <li>
                    <Link style={{textDecoration: "none"}} to="/about">
                    <div><i className="fas fa-bed"></i>&nbsp;&nbsp;SLEEP<i>STA</i> Team</div>
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

</div>

)}

logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
  };
}

export default withRouter(SideNav);

