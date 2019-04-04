import React, { Component } from "react";
import Stripe from "../components/Premium/Stripe";
import LoggedInSideNav from "../components/Nav/LoggedInSideNav.js";
import MobileNav from "../components/Nav/MobileNav.js";
import styled from "styled-components";

const DashboardNav = styled.div`
  width: 100%;
`;

const PaymentWrapper = styled.div`
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export default class PremiumPage extends Component {
  render() {
    return (
      <div>
        <DashboardNav>
          <LoggedInSideNav />
          <MobileNav />
        </DashboardNav>
        <PaymentWrapper>
          <Stripe />
        </PaymentWrapper>
      </div>
    );
  }
}
