import React, { Component } from 'react'
import Axios from 'axios';

export default class Stripe extends Component {

    stripePull(){
        Axios.get('http://sleepsta.herokuapp.com/api/stripe')
            .then(res => {
                return res;
            })
    }
  render() {
    return (
      <div>
        {this.stripePull()}
      </div>
    )
  }
}
