import React, { Component } from 'react';
import styled from "styled-components";
import LoginForm from "../Login/LoginForm";
import { Link } from "react-router-dom";
import "./Home.css";
import jum1 from './img/jum1.jpg';
import jum2 from './img/jum2.jpg';
import jum3 from './img/jum3.jpg';
import stats from './img/stats.PNG';

const Main = styled.div`
  font-family: "Poppins","Roboto";
  background-image: linear-gradient(to top, #0a1429 0%, #0f1e3f 100%);
  position: sticky;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
 display: flex;
 flex-direction: column;
  height: 80%;
  width: 100%;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  text-align: right;
  right: 0;
  width: 100%;
  height: 46px;
  padding: 10px;
`;


const LandingContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  @media(max-width: 500px){
    margin-top: 36px;
    flex-direction: column;
  }
`;

const AttentionHold = styled.div`
 width: 50%;
 padding: 20px 20px 0px 20px;

 @media(max-width: 500px){
   width: 100%:
   height: 100%;
 }
`;

const AttentionGrab = styled.div`
  background-image: url("${stats}");
  background-repeat:no-repeat;
  background-size:cover;
  height:100%;
`;

const HeaderHold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 500px){
    padding-top: 20px;
    width: 100%;
 }

  h2{
    padding-bottom: 10px;
  }
`;

const HeaderH1 = styled.h1` 
  font-family: "Poppins", "Roboto";
  font-size: 6em;
  z-index: 1;

  @media (max-width: 800px) {
    padding-top: 10px;
    font-size: 6em;
  }

  @media (max-width: 500px) {
    padding-top: 5px;
    font-size: 4em;
  }
  `;

const TaglineBar = styled.div`
  width: 100%;
  background-color: rgb(255,255,255,.05);
  border-top: 1px solid #e34a6f;
  z-index: 3;
`;

const SecondDiv = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  width: 100%;
  background-color: rgb(0,0,0,.1);
  z-index: 1;
  
  @media(max-width: 800px){
    flex-direction: column;
  }
`;

const DivBlock0 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px){
    width: 80%;
  }

  @media(max-width: 500px){
    width: 100%;
  }
`;

const DivBlock1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;

  @media(max-width: 800px){
    width: 80%;
  }

  @media(max-width: 500px){
    width: 100%;
  }
`;

const ScreenShotHold = styled.div`
  background-color: rgb(0,0,0,.1);
  padding: 20px;
  border-radius: 5px;
  height: fill;
  width: 85%;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

const ScreenShot1 = styled.div`
  background-image: url(${jum1});
  background-size: cover;
  background-position: left;
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
      <Top>
        <LandingContent>
          <HeaderHold>
            <HeaderH1>SLEEPSTA</HeaderH1>
            <h2> Sleep Hard. Live Smarter.</h2>
            <LoginForm />
          </HeaderHold>
          <AttentionHold>
            <AttentionGrab></AttentionGrab>
          </AttentionHold>
        </LandingContent>
      </Top>
      <TaglineBar />
        <SecondDiv>
          <DivBlock0>
            <ScreenShotHold>
              <ScreenShot1 />
            </ScreenShotHold>
          </DivBlock0>
          <DivBlock1>
            <p>In tandem with the IOS app</p>
            <ul>
              <li>See your sleep habits</li>
              </ul>
              </DivBlock1>
        </SecondDiv>
        <SecondDiv>
          <DivBlock1>
            <p>In tandem with the IOS app</p>
            <ul>
              <li>Track nightly sleep data</li>
              </ul>
              </DivBlock1>
              <DivBlock0>
            <ScreenShotHold>
              <ScreenShot2 />
            </ScreenShotHold>
          </DivBlock0>
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
