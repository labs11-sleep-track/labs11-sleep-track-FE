import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateUser } from "../../actions";

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

const TopForm = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 50%;
  }
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
  text-align: center;
  font-family: "Rubik";
  width: 50%;
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin: auto;
  margin-top: 12.5px;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const NewH6 = styled.h6`
  display: flex;
  justify-content: center;
  font-size: 0.7em;
  margin-top: 5px;
  color: rgb(244, 244, 244);
`;

class InjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.inputs.email,
      fname: this.props.inputs.f_name,
      lname: this.props.inputs.l_name
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.inputs.account_type === "premium") {
      return alert("You already are premium!");
    } else {
      try {
        let email = this.state.email;
        let { token } = await this.props.stripe.createToken({});
        console.log(token);
        await fetch("https://sleepsta.herokuapp.com/api/stripe/", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ token })
        });
        const user = {
          id: this.props.inputs.id,
          f_name: this.state.fname,
          l_name: this.state.lname,
          account_type: "premium"
        };
        await this.props.updateUser(user);
        alert("Premium Purchased!");
      } catch (e) {
        throw e;
      }
    }
  };
  render() {
    return (
      <FormHold>
        <TheForm onSubmit={this.handleSubmit}>
          {/* <StripeInput value={this.state.email} onChange={this.handleChange} name="email" /> */}
          <TopForm>
            <StripeInput
              value={this.state.fname}
              onChange={this.handleChange}
              name="fname"
            />
            <StripeInput
              value={this.state.lname}
              onChange={this.handleChange}
              name="lname"
            />
          </TopForm>
          <CardElement className="stripeCard" />
          <NewH6>Payments handled securely through Stripe</NewH6>
          <StripeButton>Buy Premium</StripeButton>
        </TheForm>
      </FormHold>
    );
  }
}


const mapStateToProps = state => {
  return {
    inputs: state.auth.inputs,
    isUpdated: state.auth.isUpdated
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(injectStripe(InjectForm));
