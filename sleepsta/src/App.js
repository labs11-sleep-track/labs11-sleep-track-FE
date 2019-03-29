import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";

import About from "./components/About/About.js";

import Home from "./views/HomeView";
import BlogsView from "./views/BlogsView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";
import TokenView from "./views/TokenView";
import UserForm from "./components/Profile/UpdateUserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={BlogsView} />
        <Route path="/profile" component={ProfileView} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/auth/google/:token" component={TokenView} />
      </div>
    );
  }
}

export default withRouter(App);
