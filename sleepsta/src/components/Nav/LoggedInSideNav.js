import React from "react";
import logo from "./sleep.png";
import { NavLink } from "reactstrap";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./SideBarNav.css";

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
          <div id="content">
            <nav
              id="menuButton"
              className="navbar navbar-expand-lg navbar-light "
            >
              <div className="container-fluid">
                {/* possible title */}

                {/* <a href="#" id="sidebarCollapse" className="SleepstaTitle">SLEEPSTA</a> */}

                {/* <button type="button" id="sidebarCollapse" className="btn btn-info">
                  <div className="buttonTitle">
                      <span>SLEEPSTA</span>
                      </div>
                  </button> */}
              </div>
            </nav>
          </div>

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
          </nav>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div id="content">
            <nav
              id="menuButton"
              className="navbar navbar-expand-lg navbar-light "
            >
              <div className="container-fluid">
                {/* possible title */}

                {/* <a href="#" id="sidebarCollapse" className="SleepstaTitle">SLEEPSTA</a> */}

                {/* <button type="button" id="sidebarCollapse" className="btn btn-info">
                  <div className="buttonTitle">
                      <span>SLEEPSTA</span>
                      </div>
                  </button> */}
              </div>
            </nav>
          </div>

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
              <Footer />
            </ul>
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
