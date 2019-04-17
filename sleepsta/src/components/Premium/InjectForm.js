import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import { withRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateUser } from "../../actions";
import PremiumNotif, { notify } from "../Notifications/PremiumNotif";

const FormHold = styled.div`
  // margin: 10px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.25);
  border: 1.25px solid rgb(255, 255, 255, 0.15);
  border-radius: 15px;
  font-family: "Poppins", "Roboto", Arial, Helvetica, sans-serif;
`;

const TheForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", "Roboto", Arial, Helvetica, sans-serif;
`;

const FormLabel = styled.div`
  font-family: "Poppins", "Roboto", Arial, Helvetica, sans-serif;
  color: white;
  padding: 7px;
`;

const TopForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StripeInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  margin: 3px 3px;
  border: 1.25px solid rgb(0, 0, 0, 0.15);
`;

const StripeButton = styled.button`
  background: #e34a6f
  color: white;
  text-align: center;
  font-family: "Poppins", "Roboto", "Rubik";
  width: 125px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin: auto;
  margin-top: 12.5px;
  // border: 2px solid white;

  &:hover {
    // animation: awesome 0.15s ease-in 0s 1 alternate both running;
    background: white;
    color: #e34a6f;
  }

  @keyframes awesome {
    from {
      border: 2px solid white;
      background-color: white;
      color: black;
    }
    to {
      border: 2px solid rgb(0, 0, 0, 0.5);
      background-color: #e34a6f;
      color: white;
    }
  }
`;

const NewH6 = styled.h6`
  display: flex;
  justify-content: center;
  font-size: 0.7em;
  margin-top: 5px;
  color: rgb(244, 244, 244);
`;

class InjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.inputs.email,
      fname: this.props.inputs.f_name,
      lname: this.props.inputs.l_name,
      alreadyPremium: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Function starts the process of a purchase of premium tier by creating a token using the users email. This is then sent to the backend where the transaction is processed.

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.inputs.account_type === "premium") {
      // return alert("You already are premium!");
      this.setState({ alreadyPremium: true });
      notify("notif");
    } else {
      try {
        let email = this.state.email;
        let { token } = await this.props.stripe.createToken({
          name: this.state.email
        });
        console.log(token);
        await fetch("https://sleepsta.herokuapp.com/api/stripe/", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ token })
        });
        const user = {
          id: this.props.inputs.id,
          f_name: this.state.fname,
          l_name: this.state.lname,
          account_type: "premium"
        };
        await this.props.updateUser(user);
        // await alert("Premium Purchased!");
        await notify("notif");
      } catch (e) {
        throw e;
      }
    }
  };
  render() {
    return (
      <>
        <FormHold>
          <TheForm onSubmit={this.handleSubmit}>
            <TopForm>
              <FormLabel>First Name</FormLabel>
              <StripeInput
                value={this.state.fname}
                onChange={this.handleChange}
                name="fname"
              />
              <FormLabel>Last Name</FormLabel>
              <StripeInput
                value={this.state.lname}
                onChange={this.handleChange}
                name="lname"
              />
            </TopForm>
            <NewH6>Payments handled securely through Stripe</NewH6>
            <CardElement className="stripeCard" />
            <StripeButton>Buy Premium</StripeButton>
          </TheForm>
        </FormHold>
        <div className="notif">
          <PremiumNotif alreadyPremium={this.state.alreadyPremium} />
        </div>
      </>
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
)(withRouter(injectStripe(InjectForm)));
