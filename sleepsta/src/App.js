import React, { Component } from "react";
import "./App.css";
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  registerUser
} from './actions';

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