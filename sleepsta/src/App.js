import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./actions/index";
import About from "./components/About/About.js";
import Privacy from "./components/Privacy/Privacy.js";
import Home from "./views/HomeView";
import BlogsView from "./views/BlogsView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";
import TokenView from "./views/TokenView";
import "./App.css";

class App extends Component {
  componentWillReceiveProps(nextProps) {
    // redirect to home page if we get an error with 401 status
    if (
      !this.props.error &&
      nextProps.error &&
      nextProps.error.response.status === 401
    ) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");

    // if we find token in localStorage, attempt to fetch user
    if (token) {
      this.props.getUser();
      // } else {
      //   // if token is not found, redirect to home page so user can login
      //   this.props.history.push("/");
    }
  }

  render() {
    const { user, isFetching } = this.props;

    if (isFetching && !user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/auth/google/:token" component={TokenView} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/about" component={About} />

        {/* Following are protected routes, user must be logged in to route */}
        {user && <Route exact path="/blogs" component={BlogsView} />}
        {user && <Route path="/profile" component={ProfileView} />}
        {user && <Route path="/dashboard" component={DashboardView} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  user: state.auth.currentUser,
  isFetching: state.auth.isFetching
});

export default connect(
  mapStateToProps,
  { getUser }
)(withRouter(App));
