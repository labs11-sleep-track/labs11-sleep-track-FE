import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav.js";

import LoggedOutNav from "./components/Nav/LoggedOutNav";

// import BlogsView from "./views/BlogsView";
import LoginView from "./views/LoginView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";
import TokenView from "./views/TokenView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <LoggedOutNav /> */}

        <br />
        <br />

        {/* <p>
          Sleepsta is a mobile application that uses motion tracking to measure
          sleep. It also has a web application that allows the user to visualize
          their sleep habits online.
        </p> */}
        <Route exact path="/" component={LoginView} />
        {/* {/* <Route exact path="/blogs" component={BlogsView} /> */}
        <Route path="/profile" component={ProfileView} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/auth/google/:token" component={TokenView} />
      </div>
    );
  }
}

export default withRouter(App);
