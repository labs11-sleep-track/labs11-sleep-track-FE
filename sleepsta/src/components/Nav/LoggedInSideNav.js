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
      <div className="wrapper">
        <div id="content">
          <nav
            id="menuButton"
            className="navbar navbar-expand-lg navbar-light "
          >
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
              >
                <i className="fas fa-align-left" />
                <span>&nbsp;Menu</span>
              </button>
            </div>
          </nav>
        </div>

        <nav id="sidebar">
          <div className="sidebar-header">
            <NavLink href="/">
              <div className="sleepTitle">
                SLEEP<i>STA</i>
              </div>
            </NavLink>
          </div>

          <ul className="list-unstyled components">
            <div className="catchPhrase">
              <p>Sleep Harder. Live Smarter.</p>


            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Why Sleep?
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <NavItem>
                    <NavLink href="/whysleep">
                      <div>
                        <i className="fas fa-plus" />
                        &nbsp;&nbsp;Learn More
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
                className="dropdown-toggle"
              >
                Account
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link style={{ textDecoration: "none" }} to="/profile">
                    <div>
                      <i className="fas fa-chart-bar" />
                      &nbsp;&nbsp;Profile
                    </div>
                  </Link>
                </li>

                <li>
                  <Link style={{ textDecoration: "none" }} to="/update">
                    <div>
                      <i className="fas fa-user-edit" />
                      &nbsp;&nbsp;Update Account
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#pageTwoSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Contact
              </a>
              <ul className="collapse list-unstyled" id="pageTwoSubmenu">
                <li>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    <div>
                      <i className="fas fa-bed" />
                      &nbsp;&nbsp;SLEEP<i>STA</i> Team
                    </div>
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

        {/* <main>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />  
          <Route path="/update" component={UserForm} />  
          <Route path="/profile" component={Profile} />  
          <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />   
     </main>  */}
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };
}

export default withRouter(LoggedInSideNav);
