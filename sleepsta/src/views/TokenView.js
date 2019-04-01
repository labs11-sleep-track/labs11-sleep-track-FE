import { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

class TokenView extends Component {
  async componentDidMount() {
    // save token to local storage so can be used later
    const token = this.props.match.params.token;
    localStorage.setItem("jwt", token);

    // verifying token and allowing users in app to dashboard
    this.props.getUser().then(() => {
      this.props.history.push("/dashboard");
    });
  }
  render() {
    return null;
  }
}

export default connect(
  null,
  { getUser }
)(TokenView);
