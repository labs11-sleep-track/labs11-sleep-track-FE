import React, { Component } from "react";
import styled from "styled-components";
import LoginAlt from "../Login/LoginAlt";
import "./Home.css";
import stats from "./img/stats.PNG";
import bg from "./img/bg.jpg";
import datasvg from "./img/data.svg";
import dreamsvg from "./img/dream.svg";
import happysvg from "./img/happy.svg";
import loadsvg from "./img/load.svg";
import nightsvg from "./img/night.svg";
import { Link } from "react-router-dom";

//CSS Reset is imported above for homepage. All homepage styling handled within their respective components.

const Main = styled.div`
  font-family: "Poppins", "Roboto";
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const Top = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-image: url("${bg}");
  // background: #222d44; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to top, #222d44, #161e2d, #000000); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to top, #222d44, #161e2d, #000000);
 background-size: cover;
 background-position: top center;
  height: 95%;
  width: 100%;
  z-index: -999;
  overflow: hidden;
`;

const LandingContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 100px;
  }
`;

const AttentionHold = styled.div`
  height: 100%;
  box-sizing: border-box;
  @media(max-width: 800px){
    width: 85%;
    margin: auto;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

const AttentionGrab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 115%;
  img{
    height: 100%;
    padding: 15px;
  }
`;

const HeaderHold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
  h2 {
    font-size: 0.95em;
    text-align: right;
    padding: 3px;
  }
  @media (max-height: 500px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const HeadBG = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.65);
  border: 1px solid rgb(255, 255, 255, 0.15);
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
`;

const HeaderH1 = styled.h1`
  font-family: "Poppins", "Roboto";
  font-size: 6em;
  z-index: 1;
  @media (max-width: 800px) {
    padding-top: 10px;
    font-size: 4em;
  }
`;

const TaglineBar = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255, 0.05);
  border-top: 1px solid #e34a6f;
  z-index: 3;
`;

const WelcomeHold = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WelcomeTo = styled.div`
  margin-top: 10px;
  width: 92%;
  background-color: rgb(255, 255, 255, 0.95);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  height: 500px;
  color: rgb(25, 25, 25);
  overflow: hidden;
  padding: 30px;
  box-shadow: 3px 3px 0px 1.5px black;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 400px;
  }
`;

const WelcomeLeft = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 800px) {
    width: 100%;
    img {
      width: 80%;
      height: 80%;
    }
  }
`;

const WelcomeRight = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 2.2em;
    padding: 5px 0px;
  }
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
`;

const FeatureBlocks = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const FBHold = styled.div`
  width: 30%;
  height: 400px;
  margin: 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255, 0.05);
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const SVGHold = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 85%;
    padding: 30px;
  }
`;

const FBTextHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 50%;
  padding: 10px;
`;

const FBTextHead = styled.h3`
  font-size: 1.9em;
  padding-bottom: 8px;
`;

const FBTextContent = styled.p`
  text-align: center;
  font-size: .95em;
  line-height: 20px;
  padding: 5px 10px;
`;

const FooterAll = styled.div`
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  background-color: #3f4454;
  position: relative;
  bottom: 0;
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 10px;

  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 700px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const TextSleep = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  padding: 10px;

  &:hover {
    color: #e34a6f;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 700px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
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
              <HeadBG>
                <HeaderH1> SLEEPSTA </HeaderH1>
                <h2> Sleep Hard. Live Smarter. </h2>
              </HeadBG>
              <LoginAlt />
            </HeaderHold>
            <AttentionHold>
              <AttentionGrab><img src={stats} /></AttentionGrab>
            </AttentionHold>
          </LandingContent>
        </Top>
        <TaglineBar> </TaglineBar>
        <WelcomeHold>
          <WelcomeTo>
            <WelcomeLeft>
              <img src={dreamsvg} />
            </WelcomeLeft>
            <WelcomeRight> <h3>
              Welcome to Sleepsta
            </h3> 
            <h4>
              The app that helps you sleep better.
            </h4></WelcomeRight>
          </WelcomeTo>
        </WelcomeHold>
        <FeatureBlocks>
          <FBHold>
            <SVGHold>
              <img src={datasvg} />
            </SVGHold>
            <FBTextHold>
              <FBTextHead> Track Nightly Stats </FBTextHead>
              <FBTextContent>
                {" "}
                Track your sleep habits to see if you're sleeping enough, at the
                right times, and in the right ways.{" "}
              </FBTextContent>
            </FBTextHold>
          </FBHold>
          <FBHold>
            <SVGHold>
              <img src={happysvg} />
            </SVGHold>
            <FBTextHold>
              <FBTextHead> Feel Better </FBTextHead>
              <FBTextContent>
                {" "}
                Improved sleep means more energy, an improved mood, and more
                focus. Sleepsta helps you achieve happiness.{" "}
              </FBTextContent>
            </FBTextHold>
          </FBHold>
          <FBHold>
            <SVGHold>
              <img src={loadsvg} />
            </SVGHold>
            <FBTextHold>
              <FBTextHead> Develop Better Habits </FBTextHead>
              <FBTextContent> Use the data collected over time to find the best ways to optimize your sleep patterns. </FBTextContent>
            </FBTextHold>
          </FBHold>
        </FeatureBlocks>
        <FooterAll>
          <Text> ALL CONTENT© 2019 SLEEPSTA.ALL RIGHTS RESERVED </Text>
          <TextSleep>
            <Link to="/about">SITE DESIGNED + DEVELOPED BY SLEEPSTA TEAM</Link>
          </TextSleep>
          <TextSleep>
            <Link to="/privacy"> PRIVACY POLICY </Link>
          </TextSleep>
        </FooterAll>
      </Main>
    );
  }
}

export default Home;
