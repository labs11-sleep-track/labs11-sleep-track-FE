import React, { Component } from 'react';
import styled from "styled-components";
import LoginForm from "../Login/LoginForm";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import jum1 from './img/jum1.jpg';
import jum2 from './img/jum2.jpg';
import jum3 from './img/jum3.jpg';

const Main = styled.div`
  font-family: "Roboto", "Poppins";
`;

const JumboHome = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(0,0,0,.1);

    h1 {
      text-align: center;
      padding-top: 100px;
      font-family: "Poppins", "Roboto";
      font-size: 7em;
      height: 100%;

      @media (max-width: 800px) {
        padding-top: 75px;
        font-size: 5em;
      }

      @media (max-width: 500px) {
        padding-top: 50px;
        font-size: 3em;
      }
    }

    @media (max-width: 800px) {
        height: 150px;
      }

      @media (max-width: 500px) {
        height: 100px;
      }
`;

const TaglineBar = styled.div`
  width: 100%;
  padding: 10px 5px;
  background-color: rgb(0,0,0,.05);
  text-align: center;
  font-family: "Poppins", "Roboto";
`;

const SecondDiv = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const HoldCaro = styled.div`
  width: 650px;
  padding: 5px;
  border-radius: 15px;
  background-color: rgb(0,0,0,.1);

  @media (max-width: 800px) {
        width: 450px;
      }

      @media (max-width: 500px) {
        display: none;
      }
`;

const LoginButtonWrapper = styled.div`
  padding-top: 20px;
`;


const TeamP = styled.p`
  font-size: .9em;

  @media (max-width: 800px) {
    font-size: .8em;
  }

  @media (max-width: 500px) {
    font-size: .75em;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  padding-top: 20px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 500px) {
    font-size: 10px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;


const items = [
  {
    src: jum1,
    altText: 'Sleep Tracking',
    caption: 'Sleep Tracking'
  },
  {
    src: jum2,
    altText: 'Motion Data',
    caption: 'Motion Data from App'
  },
  {
    src: jum3,
    altText: 'Sleep Blogs',
    caption: 'Sleep Blogs'
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

render() {
  const { activeIndex } = this.state;

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <Main>
      <JumboHome>
        <h1>SLEEPSTA</h1>
      </JumboHome>
      <TaglineBar>
        Sleep Hard. Live Smarter.
        </TaglineBar>
        <SecondDiv>


        <HoldCaro>
          <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </HoldCaro>



          <LoginButtonWrapper>
            <LoginForm />
          </LoginButtonWrapper>
        </SecondDiv>

        <Team>
          <TeamP>
            Meet the <Link to="/about">SLEEPSTA Team</Link>
          </TeamP>
          <TeamP>
            <Link to="/privacy">Privacy Policy</Link>
          </TeamP>
        </Team>
    </Main>
  );
};
}

export default Home;
