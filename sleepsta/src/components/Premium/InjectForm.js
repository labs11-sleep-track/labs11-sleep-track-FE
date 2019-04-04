import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import styled from "styled-components";

const FormHold = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.25);
  border-radius: 15px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

const TheForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StripeInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  margin: 3px 3px;
  border: none;
`;

const StripeLabel = styled.label`
  font-size: 1.25em;
`;

const StripeButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  margin: 0 auto;
`;

class InjectForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
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
    } catch (e) {
      throw e;
    }
  };
  render() {
    return (
      <FormHold>
        <TheForm onSubmit={this.handleSubmit}>
          <StripeInput
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <CardElement className="stripeCard" />
          <StripeButton>Buy Premium</StripeButton>
        </TheForm>
      </FormHold>
    );
  }
}

export default injectStripe(InjectForm);
