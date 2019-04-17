import React, { Component } from "react";
import styled from "styled-components";
import ee from "event-emitter";
import { withRouter, Route } from "react-router-dom";

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

class PremiumNotif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: -500,
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
          top: -500
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
        top: -300,
        msg
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({
            top: -505
          });
        }, 2000);
      }
    );
  };

  redirect = () => {
    this.props.history.push("/dashboard");
    window.location.reload();
  };
  render() {
    {
      this.state.top === -505 && this.redirect();
    }
    if (this.props.alreadyPremium) {
      return (
        <Container top={this.state.top} className="notif">
          <span>You already are premium!</span>
          <i className="fa fa-bell" />
        </Container>
      );
    } else {
      return (
        <Container top={this.state.top} className="notif">
          <span>Premium purchased!</span>
          <i className="fa fa-bell" />
        </Container>
      );
    }
  }
}

export default withRouter(PremiumNotif);
