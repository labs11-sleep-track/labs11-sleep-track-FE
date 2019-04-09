import React from "react";
import InjectForm from "./InjectForm";
import { StripeProvider, Elements } from "react-stripe-elements";
import styled from "styled-components";
import jumboImage from "./img/jumbo.jpg";


const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
const keySecret = process.env.REACT_APP_SECRET_KEY;

const PremJumbo = styled.div`
  background-image: url(${jumboImage});
  background-position: center;
  background-size: cover;
  height: 350px;
  margin: 0px 30px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
          box-shadow: 0 8px 6px -6px black;
`;

const PremBene = styled.div`
    margin: 0px 30px;
`;

const RealH1 = styled.h1`
  background: transparent;
  text-align: right;
  padding-right: 10px;
  padding-top: 10px;
  font-size: 3.75em;
  color: white;
  text-shadow: 2px 2px 3px #000000;
  font-family: "Roboto", "Rubik", Arial, Helvetica, sans-serif;
`;

const RealH2 = styled.h2`
  font-size: 1.8em;
  font-family: "Roboto", "Rubik", Arial, Helvetica, sans-serif;
  margin: 7.5px 3px;
`;

const RealH3 = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-top: 10px;
  font-family: "Roboto";
  font-size: 1.5em;
  padding: 3px;
`;

const NewOL = styled.ol`
  font-family: "Rubik";
  list-style-type: upper-roman;
  list-style-position: inside;
  margin-left: 15px;
`;

const NewLI = styled.li`
  font-size: .95em;
`;

const StripeHold = styled.div`
  margin: 0px 30px;
`;

class Stripe extends React.Component {
  render() {
    return (
      <div>
        <PremJumbo>
          <RealH1>Premium</RealH1>
        </PremJumbo>
        <PremBene>
          <RealH2>The Benefits:</RealH2>
          <NewOL>
            <NewLI>You get to be premium.</NewLI>
            <NewLI>You're cool cause you're premium.</NewLI>
            <NewLI>You're apart of the premium club</NewLI>
          </NewOL>
        </PremBene>

        <RealH3>Cost? $10.</RealH3>
        <StripeHold>
          <StripeProvider apiKey={keyPublishable}>
            <Elements>
              <InjectForm />
            </Elements>
          </StripeProvider>
        </StripeHold>
      </div>
    );
  }
}

export default Stripe;
