import React from 'react';
import axios from 'axios';
export default class Checkout extends React.Component {

  onToken = (token, addresses) => {
    const body = {
      amount: 1000,
      token: token
    };

    axios
      .post("http://sleepsta.herokuapp.com/api/stripe/charge", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  render() {
    return (
      <div></div>

    )
}
}
