import React, { Component } from "react";
import "./App.css";
import { withRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "./actions";

import Nav from "./components/Nav/Nav.js";

import LoggedOutNav from "./components/Dashboard/LoggedOutNav";


// import DashboardView from "./views/DashboardView";
// import BlogsView from "./views/BlogsView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        {/* <LoggedOutNav /> */}

        <br />
        <br />

        <p>
          Sleepsta is a mobile application that uses motion tracking to measure
          sleep. It also has a web application that allows the user to visualize
          their sleep habits online.
        </p>
        <Route exact path="/" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        {/* <Route exact path="/blogs" component={BlogsView} />
        <Route exact path="/home" component={DashboardView} /> */}
        <Route path="/profile" component={ProfileView} />
        <Route path="/dashboard" component={DashboardView} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistering: state.auth.isRegistering
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      registerUser
    }
  )(App)
);
