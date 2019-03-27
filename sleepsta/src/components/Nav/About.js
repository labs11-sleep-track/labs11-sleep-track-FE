import React from 'react';
import styled from 'styled-components'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Cards = styled.div`
width: 800px;
height: 550px;
color: black;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content: space-evenly;
`

const About = (props) => {
  return (
    <Cards>
      <Card>
        <CardImg src="https://avatars1.githubusercontent.com/u/44475921?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kelli Rae Hanson</CardTitle>
          <CardSubtitle>Lambda School Software Engineering student</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Contact</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg src="https://avatars2.githubusercontent.com/u/42158951?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg src="https://avatars1.githubusercontent.com/u/12664944?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

    </Cards>
  );
};

export default About;