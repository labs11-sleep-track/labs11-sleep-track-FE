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

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}
  
  @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    margin-top: 30px;
  }
  
  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;

const H5 = styled.h5`
  padding: 40px 0;
  color: #4c546f;

  @media (max-width: 800px) {
    font-size: 15px;
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    margin-top: 50px;
  }
`;

const H2 = styled.h2`
  font-size: 50px;

  @media (max-width: 800px) {
    font-size: 45px;
  }

  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

const LoginButtonWrapper = styled.div`
  padding-top: 20px;

  @media (max-width: 800px) {
    margin-top: -40px;
  }

  @media (max-width: 500px) {
    margin-top: -60px;
  }
`;

const Span = styled.div`
  font-size: 16px;

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const P = styled.p`
@media (max-width: 800px) {
  font-size: 15px;
  margin-top: 10px;
}

@media (max-width: 500px) {
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
}
`

const Home = () => {
  return (
    <Main>
      <Header>
        <H5> INTRODUCING</H5>
        <H2>
          SLEEP<i>STA</i>&nbsp;APP
        </H2>
        <P> Sleep Harder. Live Smarter</P>
        <br />
        <Span>
          Mobile application that uses motion tracking to measure sleep.
        </Span>
        <Span>
          Web application allows you to visualize your sleep analysis.
        </Span>

        <LoginButtonWrapper>
          <LoginForm />
        </LoginButtonWrapper>
      </Header>
    </Main>
  );
};

export default Home;
