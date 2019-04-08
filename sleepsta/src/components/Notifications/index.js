import React, { Component } from "react";
import styled from "styled-components";
import ee from "event-emitter";
import { connect } from "react-redux";

const Container = styled.div`
  background-color: #e34a6f;
  color: #252e4f;
  padding: 16px;
  position: absolute;
  top: ${props => props.top}px;
  right: 16px;
  z-index: 999;
  transition: top 0.5s ease;

  > i {
    margin-left: 8px;
  }
`;

const emitter = new ee();

export const notify = msg => {
  emitter.emit("notification", msg);
};

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: -100,
      msg: ""
    };
    this.timeout = null;

    emitter.on("notification", msg => {
      this.onShow(msg);
    });
  }

  onShow = msg => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState(
        {
          top: -100
        },
        () => {
          this.timeout = setTimeout(() => {
            this.showNotification(msg);
          }, 500);
        }
      );
    } else {
      this.showNotification(msg);
    }
  };

  showNotification = msg => {
    this.setState(
      {
        top: 16,
        msg
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({
            top: -100
          });
        }, 3000);
      }
    );
  };

  render() {
    if (this.props.update > 0) {
      return (
        <Container top={this.state.top} className="notif">
          {console.log("failed")}
          <span>Failed to update profile. </span>
          <i className="fa fa-bell" />
        </Container>
      );
    } else {
      return (
        <Container top={this.state.top} className="notif">
          {console.log("success")}
          <span>Profile successfully updated. </span>
          <i className="fa fa-bell" />
        </Container>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isUpdated: state.auth.isUpdated
  };
};

export default connect(
  mapStateToProps,
  {}
)(Notifications);
