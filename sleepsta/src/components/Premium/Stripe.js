import React from "react";
import InjectForm from "./InjectForm";
import { StripeProvider, Elements } from "react-stripe-elements";
import styled from "styled-components";

const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
const keySecret = process.env.REACT_APP_SECRET_KEY;

const RealH1 = styled.h1`
  font-size: 3.75em;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
`;

const RealH2 = styled.h2`
  font-size: 1.8em;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  margin: 7.5px 3px;
`;

const RealH3 = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  font-size: 1.5em;
  padding: 3px;
`;

const NewOL = styled.ol`
  font-family: "Rubik";
  list-style-type: upper-roman;
  list-style-position: inside;
  margin-left: 15px;
`;

const NewLI = styled.li``;

class Stripe extends React.Component {
  render() {
    return (
      <div>
        <RealH1>Premium</RealH1>
        <RealH2>The Benefits:</RealH2>
        <NewOL>
          <NewLI>You get to be premium.</NewLI>
          <NewLI>You're cool cause you're premium.</NewLI>
          <NewLI>You're apart of the premium club</NewLI>
        </NewOL>

        <RealH3>Cost? $10.</RealH3>
        <StripeProvider apiKey="${keyPublishable}">
          <Elements>
            <InjectForm inputs={this.props.inputs} />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Stripe;
