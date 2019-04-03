import React from "react";
import styled from "styled-components";
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
  DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

import "./SideBarNav.css";

// import LoginForm from '../Login/LoginForm';
// import Register from '../Register/RegisterForm';
// import UserForm from '../Profile/UpdateUserForm';
// import Profile from '../Profile/Profile';
// import Blogs from './blogs/Blogs';
// import About from '../About/About';

class LoggedInSideNav extends React.Component {
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
            <div className="container-fluid">
              <a href="#" id="sidebarCollapse" className="SleepstaTitle">
                SLEEPSTA
              </a>

              {/* <button type="button" id="sidebarCollapse" className="btn btn-info">
                <div className="buttonTitle">
                    <span>SLEEPSTA</span>
                    </div>
                </button> */}
            </div>
          </nav>
        </div>

        <nav id="sidebar">
          <div class="sidebar-header">
            <NavLink href="/">
              <div className="sleepTitle">
                SLEEP<i>STA</i>
              </div>
            </NavLink>
          </div>

          <nav id="sidebar">
            <div className="sidebar-header">
              <NavLink href="/dashboard">
                <div className="sleepTitle">
                  SLEEP<i>STA</i>
                </div>
              </NavLink>
            </div>

            <ul className="list-unstyled components">
              <div className="catchPhrase">
                <p>Sleep Harder. Live Smarter.</p>
              </div>

              <li class="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Dashboard
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <NavItem>
                      <NavLink href="/">
                        <div>
                          <i class="fas fa-home" />&nbsp;&nbsp;Home
                        </div>
                      </NavLink>
                    </NavItem>
                  </li>
                </ul>
              </li>

              <li className="active">
                <a
                  href="#pageSubmenu3"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Blogs
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu3">
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/blogs">
                      <div>
                        <i className="fas fa-rss" />
                        &nbsp;&nbsp;Sleep Blogs
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Account
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/profile">
                      <div>
                        <i class="fas fa-user" />&nbsp;&nbsp;Profile
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link style={{ textDecoration: "none" }} to="/update">
                      <div>
                        <i className="fas fa-dollar-sign" />&nbsp;&nbsp;Payment
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li>
                <a href="#pageTwoSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Contact</a>
                <ul class="collapse list-unstyled" id="pageTwoSubmenu">

                    <li>
                        <Link style={{textDecoration: "none"}} to="/about">
                            <div><i className="fas fa-bed"></i>&nbsp;&nbsp;SLEEP<i>STA</i> Team</div>
                        </Link>
                    </li>
                </ul>
            </li> */}

              <li>
                <div>
                  <a onClick={this.logout}>Logout</a>
                </div>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };
}

export default withRouter(LoggedInSideNav);
