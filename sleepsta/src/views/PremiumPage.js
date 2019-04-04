import React, { Component } from "react";
import Stripe from "../components/Premium/Stripe";
import styled from "styled-components";

const Div = styled.div`
  @media (min-width: 1920px) {
    max-width: 450px;
    margin: 0 auto;
    margin-top: 200px;
  }
`;

export default class PremiumPage extends Component {
  render() {
    return (
      <Div>
        <Stripe />
      </Div>
    );
  }
}
