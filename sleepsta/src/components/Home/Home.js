import React from "react";
import styled from "styled-components";
import LoginForm from "../Login/LoginForm";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
  height: 600px;
  font-family: "Roboto", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const H5 = styled.h5`
  padding: 40px 0;
  color: #4c546f;
`;

const H2 = styled.h2`
  font-size: 50px;
`;

const LoginButtonWrapper = styled.div`
  padding-top: 20px;
`;
const Span = styled.div`
  font-size: 16px;
`;

const Home = () => {
  return (
    <Main>
      <Header>
        <H5> INTRODUCING</H5>
        <H2>
          SLEEP<i>STA</i> APP
        </H2>
        <p> Sleep Harder. Live Smarter</p>
        <br />
        <Span>
          Mobile application that uses motion tracking to measure sleep
        </Span>
        <Span>Web application allows you to visualize your sleep data</Span>

        <LoginButtonWrapper>
          <LoginForm />
        </LoginButtonWrapper>
      </Header>
    </Main>
  );
};

export default Home;
