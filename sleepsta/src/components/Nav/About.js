import React from 'react';
import styled from 'styled-components'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Cards = styled.div`
width: 300px;
height: auto;
color: black;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-evenly;
`

const SingleCard = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const About = (props) => {
  return (
    <Cards>
        <SingleCard>
        <Card>
        <CardImg src="https://avatars2.githubusercontent.com/u/44785921?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Bhumi Patel</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Contact</Button>
        </CardBody>
      </Card>
      </SingleCard>

      <SingleCard>
      <Card>
        <CardImg src="https://avatars0.githubusercontent.com/u/44517455?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kanek Perez</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </SingleCard>

      <SingleCard>
      <Card>
        <CardImg src="https://avatars1.githubusercontent.com/u/44754360?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Olivia Osborn</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </SingleCard>

      <SingleCard>
      <Card>
        <CardImg src="https://avatars2.githubusercontent.com/u/42158951?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Leland R.</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </SingleCard>

      <SingleCard>
      <Card>
        <CardImg src="https://avatars1.githubusercontent.com/u/12664944?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dillon McElhinney</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </SingleCard>

      <SingleCard>
      <Card>
        <CardImg src="https://avatars1.githubusercontent.com/u/44475921?s=460&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kelli Rae Hanson</CardTitle>
          <CardSubtitle>Lambda School Software Engineering student</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Contact</Button>
        </CardBody>
      </Card>
      </SingleCard>

    </Cards>
  );
};

export default About;