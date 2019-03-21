import React, { Component } from "react";
// import { Route } from "react-router-dom";
import "./App.css";

// import DashboardView from "./views/DashboardView";
// import BlogsView from "./views/BlogsView";
// import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
// import ProfileView from "./views/ProfileView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Sleepsta</h1>
        <p>
          Sleepsta is a mobile application that uses motion tracking to measure
          sleep. It also has a web application that allows the user to visualize
          their sleep habits online.
        </p>
        {/* <Route exact path="/" component={LoginView} />
        <Route path="/register" component={RegisterView} /> */}
        {/* <Route exact path="/blogs" component={BlogsView} />
        <Route exact path="/home" component={DashboardView} />
        <Route exact path="/profile" component={ProfileView} /> */}
        <RegisterView />
      </div>
    );
  }
}

export default App;
