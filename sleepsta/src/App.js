import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";

import About from "./components/About/About.js";
import LoggedInSideNav from "./components/Nav/LoggedInSideNav.js";

// import BlogsView from "./views/BlogsView";
import LoginView from "./views/LoginView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";
import TokenView from "./views/TokenView";
import UserForm from './components/Profile/UpdateUserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoggedInSideNav />

        <br />
        <br />

        {/* <p>
          Sleepsta is a mobile application that uses motion tracking to measure
          sleep. It also has a web application that allows the user to visualize
          their sleep habits online.
        </p> */}
        <Route exact path="/" component={LoginView} />
        <Route exact path="/about" component={About} />
        {/* {/* <Route exact path="/blogs" component={BlogsView} /> */}
        <Route path="/profile" component={ProfileView} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/auth/google/:token" component={TokenView} />
      </div>
    );
  }
}

export default withRouter(App);
