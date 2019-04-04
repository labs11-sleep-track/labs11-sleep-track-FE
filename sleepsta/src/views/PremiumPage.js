import React, { Component } from 'react'
import Stripe from '../components/Premium/Stripe';
import LoggedInSideNav from '../components/Nav/LoggedInSideNav';

export default class PremiumPage extends Component {
  render() {
    return (
      <div>
        <div>
          <LoggedInSideNav />
        </div>
        <Stripe />
      </div>
    )
  }
}
