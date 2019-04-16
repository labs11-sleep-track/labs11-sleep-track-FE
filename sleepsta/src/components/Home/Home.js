import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../Login/LoginForm";
import "./Home.css";
import stats from "./img/stats.PNG";
import bg from "./img/bg.jpg";
import datasvg from "./img/data.svg";
import dreamsvg from "./img/dream.svg";
import happysvg from "./img/happy.svg";
import loadsvg from "./img/load.svg";

//CSS Reset is imported above for homepage. All homepage styling handled within their respective components.

const Main = styled.div`
  font-family: "Poppins", "Roboto";
  /* background-image: linear-gradient(to top, #0a1429 0%, #0f1e3f 100%); */
  position: sticky;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
 display: flex;
 flex-direction: column;
 background-image: url("${bg}");
 background-size: cover;
 background-position: center;
  height: 85%;
  width: 100%;

  @media(max-width: 800px){
    height: 70%;
  }
`;

const LandingContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  @media (max-width: 800px) {
    margin-top: 36px;
    flex-direction: column;
  }

  @media(max-height: 500px){
    flex-direction: column;
  }
`;

const AttentionHold = styled.div`
 width: 50%;
 padding: 20px 20px 0px 20px;

 @media(max-width: 800px){
   width: 100%:
   height: 100%;
 }
`;

const AttentionGrab = styled.div`
  background-image: url("${stats}");
  background-repeat:no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
`;

const HeaderHold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

<<<<<<< HEAD
  @media(max-width: 800px){
=======
  @media (max-width: 500px) {
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
    padding-top: 20px;
    width: 100%;
  }

<<<<<<< HEAD
  @media(max-height: 500px){
    flex-direction: row;
  }

  h2{
=======
  h2 {
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
    text-align: right;
    padding: 3px;
  }
`;

const HeadBG = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  background-color: rgb(0,0,0,.65);
  border: 1px solid rgb(255,255,255,.15);
=======
  background-color: rgb(0, 0, 0, 0.5);
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
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
    font-size: 4.5em;
  }

<<<<<<< HEAD
  `;
=======
  @media (max-width: 500px) {
    padding-top: 5px;
    font-size: 4em;
  }
`;
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96

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
  width: 92%;
<<<<<<< HEAD
  background-color: rgb(255,255,255,.95);
=======
  background-color: rgb(255, 255, 255, 0.9);
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
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
    height: 800px;
  }
`;

const WelcomeLeft = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
img {
    width: 90%;
    height: 90%;
  } 
  @media(max-width: 800px){
    width: 100%;

    img{ 
      width: 80%;
      height: 80%;
    }
=======
  img {
    width: 95%;
    height: 95%;
  }
  @media (max-width: 800px) {
    width: 100%;
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
  }
`;

const WelcomeRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.4em;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
`;

const FeatureBlocks = styled.div`
  margin-top: 20px;
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
  height: 800px;
  margin: 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255, 0.05);

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const SVGHold = styled.div`
  width: 100%;
<<<<<<< HEAD
  height: 50%;
  display: flex;
  justify-content: center;
  
=======

>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
  img {
    width: 85%;
    padding: 30px;
  }
<<<<<<< HEAD
`

const FBTextHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
`;

const FBTextHead = styled.h3`

`;

const FBTextContent = styled.p`

=======
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
`;

const TeamP = styled.p`
  padding: 3px 0px;
  font-size: 0.9em;

  @media (max-width: 800px) {
<<<<<<< HEAD
    font-size: .75em;
=======
    font-size: 0.8em;
  }

  @media (max-width: 500px) {
    font-size: 0.75em;
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
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
              <HeadBG>
                <HeaderH1>SLEEPSTA</HeaderH1>
                <h2> Sleep Hard. Live Smarter.</h2>
              </HeadBG>
              <LoginForm />
            </HeaderHold>
            <AttentionHold>
              <AttentionGrab />
            </AttentionHold>
          </LandingContent>
        </Top>
        <TaglineBar> </TaglineBar>

        <WelcomeHold>
          <WelcomeTo>
            <WelcomeLeft>
              <img src={dreamsvg} />
            </WelcomeLeft>
            <WelcomeRight>Welcome to Sleepsta</WelcomeRight>
          </WelcomeTo>
        </WelcomeHold>

        <FeatureBlocks>
          <FBHold>
            <SVGHold>
              <img src={datasvg} />
            </SVGHold>
<<<<<<< HEAD
            <FBTextHold>
                <FBTextHead>Header</FBTextHead>
                <FBTextContent>Content goes here</FBTextContent>
            </FBTextHold>
          </FBHold>
          <FBHold>
              <SVGHold>
                <img src={happysvg} />
              </SVGHold>
              <FBTextHold>
                <FBTextHead>Header</FBTextHead>
                <FBTextContent>Content goes here</FBTextContent>
              </FBTextHold>
          </FBHold>
          <FBHold>
              <SVGHold>
                <img src={loadsvg} />
              </SVGHold>
              <FBTextHold>
                <FBTextHead>Header</FBTextHead>
                <FBTextContent>Content goes here</FBTextContent>
              </FBTextHold>
=======
          </FBHold>
          <FBHold>
            <SVGHold>
              <img src={happysvg} />
            </SVGHold>
          </FBHold>
          <FBHold>
            <SVGHold>
              <img src={loadsvg} />
            </SVGHold>
>>>>>>> dd6d2b7f5d1148951d99663eacaa2cf1daf27f96
          </FBHold>
        </FeatureBlocks>
      </Main>
    );
  }
}

export default Home;
