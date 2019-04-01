import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/index";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: "",
      l_name: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newInfo = {
      f_name: this.state.f_name,
      l_name: this.state.l_name
    };
    const id = this.props.inputs.id;

    this.props.updateUser(id, newInfo);
    this.setState({
      f_name: "",
      l_name: ""
    });
  };

  render() {
    return (
      <div>
        <label>Update User Info</label>
        <form>
          <div className="fNameDiv">
            <label>First Name</label>
            <input
              type="text"
              name="f_name"
              value={this.state.f_name}
              placeholder="First Name"
              onChange={this.handleChanges}
            />
          </div>

          <div className="lNameDiv">
            <label>Last Name</label>
            <input
              type="text"
              name="l_name"
              value={this.state.l_name}
              placeholder="Last Name"
              onChange={this.handleChanges}
            />
          </div>
          <button onClick={this.handleSubmit}>Update</button>
        </form>
        {this.props.isUpdated ? null : <h3>Updated successfully.</h3>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.auth.inputs,
    isUpdated: state.auth.isUpdated
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(UserForm);
