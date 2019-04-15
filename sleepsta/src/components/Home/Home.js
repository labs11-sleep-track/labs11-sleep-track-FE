import React, { Component } from 'react';
import styled from "styled-components";
import LoginForm from "../Login/LoginForm";
import { Link } from "react-router-dom";
import "./Home.css";
import stats from './img/stats.PNG';
import bg from './img/bg.jpg';
import datasvg from './img/data.svg';
import dreamsvg from './img/dream.svg';
import happysvg from './img/happy.svg';
import loadsvg from './img/load.svg';


//CSS Reset is imported above for homepage. All homepage styling handled within their respective components.

const Main = styled.div`
  font-family: "Poppins","Roboto";
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
  height: 80%;
  width: 100%;
`;

const LandingContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  @media(max-width: 800px){
    margin-top: 36px;
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

const HeadBG = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0,0,0,.15);
  padding: 20px;
  border-radius: 15px;
`

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

const FeatureBlocks = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 800px){
    flex-direction: column;
  }
`;

const FBHold = styled.div`
  width: 30%;
  height: 500px;
  margin: 10px;
  border-radius: 15px;
  background-color: rgb(255,255,255,.05);

  @media(max-width: 800px){
    width: 90%;
  }
`;

const SVGHold = styled.div`
  width: 100%;
  
  img {
    width: 100%;
    padding: 30px;
  }
`



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
            <HeadBG>
              <HeaderH1>SLEEPSTA</HeaderH1>
              <h2> Sleep Hard. Live Smarter.</h2>
            </HeadBG>
            <LoginForm />
          </HeaderHold>
          <AttentionHold>
            <AttentionGrab></AttentionGrab>
          </AttentionHold>
        </LandingContent>
      </Top>
      <TaglineBar> </TaglineBar>
        <FeatureBlocks>
          <FBHold>
            <SVGHold>
              <img src={datasvg} />
            </SVGHold>        
          </FBHold>
          <FBHold>
              <SVGHold>
                <img src={dreamsvg} />
              </SVGHold>
          </FBHold>
          <FBHold>
              <SVGHold>
                <img src={loadsvg} />
              </SVGHold>
          </FBHold>
        </FeatureBlocks>

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
