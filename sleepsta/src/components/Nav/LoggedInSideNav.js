import React from "react";
import logo from "./sleep.png";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./SideBarNav.css";
import styled from "styled-components";

const FooterAll = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  font-family: "Poppins", sans-serif;
  background-color: #3f4454;
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

  // componentDidMount() {
  //   const token = localStorage.getItem("jwt");
  // }

  render() {
    if (localStorage.getItem("jwt")) {
      return (
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <NavLink href="/dashboard">
                <div className="sleepTitle">
                  <img src={logo} className="logo" alt="sleep" />
                </div>
              </NavLink>
            </div>

            <ul className="list-unstyled components">
              <div className="catchPhrase">
                <p>Sleep Harder. Live Smarter.</p>
              </div>

              <li>
                <NavLink style={{ textDecoration: "none" }} href="/dashboard">
                  <div>
                    <i className="fas fa-chart-bar" />
                    &nbsp;&nbsp;Dashboard
                  </div>
                </NavLink>
              </li>

              <li>
                <Link style={{ textDecoration: "none" }} to="/blogs">
                  <div>
                    <i className="fas fa-bed" />
                    &nbsp;&nbsp;Sleep Blogs
                  </div>
                </Link>
              </li>

              <li>
                <Link style={{ textDecoration: "none" }} to="/profile">
                  <div>
                    <i className="fas fa-user-circle" />
                    &nbsp;&nbsp;Account
                  </div>
                </Link>
              </li>

              <li>
                <div>
                  <a onClick={this.logout}>
                    <i className="fas fa-sign-out-alt" />
                    &nbsp;&nbsp;Logout
                  </a>
                </div>
              </li>
            </ul>
            <footer>
              <FooterAll>
                <Text>ALL CONTENT © 2019 SLEEPSTA. ALL RIGHTS RESERVED</Text>
              </FooterAll>
            </footer>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <NavLink href="/">
                <div className="sleepTitle">
                  <img src={logo} className="logo" alt="sleep" />
                </div>
              </NavLink>
            </div>

            <ul className="list-unstyled components">
              <div className="catchPhrase">
                <p>Sleep Harder. Live Smarter.</p>
              </div>

              <li>
                <Link style={{ textDecoration: "none" }} to="/">
                  <div>
                    <i className="fas fa-user" />
                    &nbsp;Sign In
                  </div>
                </Link>
              </li>

              <li>
                <Link style={{ textDecoration: "none" }} to="/about">
                  <div>
                    <i className="fas fa-bed" />
                    &nbsp;About
                  </div>
                </Link>
              </li>

              <li>
                <Link style={{ textDecoration: "none" }} to="/privacy">
                  <div>
                    <i className="fas fa-user-shield" />
                    &nbsp;Privacy Policy
                  </div>
                </Link>
              </li>
            </ul>
            <footer>
              <FooterAll>
                <Text>ALL CONTENT © 2019 SLEEPSTA. ALL RIGHTS RESERVED</Text>
              </FooterAll>
            </footer>
          </nav>
        </div>
      );
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };
}

export default withRouter(LoggedInSideNav);
