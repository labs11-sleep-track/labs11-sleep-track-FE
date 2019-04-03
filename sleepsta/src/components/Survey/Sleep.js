import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, CustomInput, Input } from 'reactstrap';
import styled from 'styled-components';

const SleepSurvey = styled.div`
    margin: auto;
    padding: 30px;
    width: 75%;
    background-color: rgb(0,0,0,.25);
    border-radius: 25px;
    margin-top: 20px;
    font-family: 'Rubik', 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export default class Sleep extends Component {
  render() {
    return (
      <SleepSurvey>
        <Form>
            <FormGroup>
                <FormGroup>
                    <Label>How was your day?</Label>
                </FormGroup>
                <Input type="select" bsSize="lg">
                  <option>:)</option>
                  <option>:|</option>
                  <option>:(</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <FormGroup>
                    <Label>How tired are you?</Label>
                </FormGroup>
                <Input type="select" bsSize="lg" >
                  <option>Fully Awake</option>
                  <option>Awake</option>
                  <option>Neither here nor there</option>
                  <option>Sleepy</option>
                  <option>Exhausted</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Are you getting to sleep on time?" />
            </FormGroup>
            <Button>Go to Sleep</Button>
        </Form>
      </SleepSurvey>
    )
  }
}
