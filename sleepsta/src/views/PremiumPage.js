
import React, { Component } from 'react'
import Stripe from '../components/Premium/Stripe';
import LoggedInSideNav from '../components/Nav/LoggedInSideNav';
import MobileNav from '../component/Nav/MobileNav';


export default class PremiumPage extends Component {
  render() {
    return (
      <div>
        <div>
          <LoggedInSideNav />
                <MobileNav />
        </div>
        <Stripe />
      </div>
    );
  }
}
