import React from "react";
import InjectForm from "./InjectForm";
import { StripeProvider, Elements } from "react-stripe-elements";
import styled from "styled-components";

const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
const keySecret = process.env.REACT_APP_SECRET_KEY;

const StripeHold = styled.div`
  margin: auto;
  font-family: "Robbins", "Roboto", "Rubik", Arial, Helvetica, sans-serif;
`;

class Stripe extends React.Component {
  render() {
    return (
      <StripeHold>
        <StripeProvider apiKey={keyPublishable}>
          <Elements>
            <InjectForm />
          </Elements>
        </StripeProvider>
      </StripeHold>
    );
  }
}

export default Stripe;
