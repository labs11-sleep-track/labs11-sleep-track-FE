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
  background-image: linear-gradient(to top, #0a1429 0%, #0f1e3f 100%);
  position: sticky;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  width: 100%;
`;

const JumboHome = styled.div`
  width: 100%;
  height: 200px;
    }

      @media (max-width: 800px) {
        height: 150px;
      }

      @media (max-width: 500px) {
        height: 100px;
      }
`;

const HeaderH1 = styled.h1` 
  text-align: center;
  padding: 35px;
  font-family: "Poppins", "Roboto";
  font-size: 7em;
  z-index: 1;
  height: 100%;

  @media (max-width: 800px) {
    padding-top: 10px;
    font-size: 5em;
  }

  @media (max-width: 500px) {
    padding-top: 5px;
    font-size: 3em;
  }
  `;

const TaglineBar = styled.div`
  width: 100%;
  padding: 10px 5px;
  background-color: rgb(255,255,255,.05);
  text-align: center;
  font-family: "Poppins", "Roboto";
  border-top: 1px solid #e34a6f;
  z-index: 1;
`;

const SecondDiv = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;

const DivBlock0 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivBlock1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ScreenShotHold = styled.div`
  background-color: rgb(0,0,0,.1);
  padding: 20px;
  border-radius: 5px;
  height: fill;
  width: 80%;
`;

const ScreenShot1 = styled.div`
  background-image: url(${jum1});
  background-size: cover;
  height: 380px;
`;

const ScreenShot2 = styled.div`
  background-image: url(${jum2});
  background-size: cover;
  height: 380px;
`;

const ScreenShot3 = styled.div`
  background-image: url(${jum3});
  background-size: cover;
  height: 380px;
`;

const LoginButtonWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
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

class Home extends Component {

render() {
  return (
    <Main>
      <TopBar>
      <LoginButtonWrapper>
            <LoginForm />
          </LoginButtonWrapper>
        </TopBar>
      <HeaderH1>SLEEPSTA</HeaderH1>
      <TaglineBar>
        Sleep Hard. Live Smarter.
        </TaglineBar>
        <SecondDiv>
          <DivBlock0>
            <ScreenShotHold>
              <ScreenShot1 />
            </ScreenShotHold>
          </DivBlock0>
          <DivBlock1>
            <p>In tandem with the IOS app</p>
            <ul>
              <li>Track nightly sleep data</li>
              </ul>
              </DivBlock1>
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
