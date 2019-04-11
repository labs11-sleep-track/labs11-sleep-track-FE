import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import LoggedInSideNav from "../Nav/LoggedInSideNav.js";
import MobileNav from "../Nav/MobileNav.js";

import D from "./dillon_profile_photo.jpg";

const Cards = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  padding-left: 240px;
  padding-right: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SingleCard = styled.div`
  width: 280px;
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
  // box-shadow: 5px 2px 2px grey;
`;

const AboutNav = styled.div`
  width: 100%;
`;

const Image = styled.div`
  border-bottom: 3px solid white;
  width: auto;
  max-width: 275px;
  height: auto;
  max-height: 275px;
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: 22px;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  text-shadow: 2px 2px #0a1428;
`;

const SubTitle = styled.h2`
  font-size: 15px;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  text-shadow: 2px 2px #0a1428;
`;

// const Text = styled.p`
// font-size: 15px;
// font-weight: bold;
// letter-spacing: 1px;
// display: flex;
// justify-content: space-evenly;
// padding-bottom: 10px;

// `

const ButtonThing = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const A = styled.a`
  display: flex;
  justify-content: space-evenly;
  padding-top: 12px;
  padding-bottom: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  width: 90px;
  background-color: #e34a6f;
  border-radius: 5px;
  color: white;
  box-shadow: 2px 2px #0a1428;

  &:hover {
    color: #e34a6f;
    background-color: white;
  }
`;

const Body = styled(CardBody)`
  background-color: #303848;
`;

const About = props => {
  return (
    <div>
      <AboutNav>
        <LoggedInSideNav />
        <MobileNav />
      </AboutNav>

      <Cards>
        <SingleCard>
          <Card>
            <Image>
              <CardImg
                src="https://avatars2.githubusercontent.com/u/44785921?s=460&v=4"
                alt="Card image cap"
              />
            </Image>

            <Body>
              <Title>
                <CardTitle>Bhumi Patel</CardTitle>
              </Title>

              <SubTitle>
                <CardSubtitle>Full Stack Web Developer</CardSubtitle>
              </SubTitle>

              {/* <Text>
          <CardText>
            Favorite Sleep Remedy: 
            <br/>
            Ideal amount of sleep: 
            </CardText>
        </Text> */}

              <ButtonThing>
                <A class="btn btn-default" href="" role="button">
                  LinkedIn
                </A>
                <A
                  class="btn btn-default"
                  href="https://github.com/bhumip214"
                  role="button"
                >
                  GitHub
                </A>
              </ButtonThing>
            </Body>
          </Card>
        </SingleCard>

        <SingleCard>
          <Card>
            <Image>
              <CardImg
                src="https://avatars0.githubusercontent.com/u/44517455?s=460&v=4"
                alt="Card image cap"
              />
            </Image>

            <Body>
              <Title>
                <CardTitle>Kanek Perez</CardTitle>
              </Title>

              <SubTitle>
                <CardSubtitle>Full Stack Web Developer</CardSubtitle>
              </SubTitle>

              {/* <Text>
          <CardText>
            Favorite Sleep Remedy: 
            <br/>
            Ideal amount of sleep: 
            </CardText>
        </Text> */}

              <ButtonThing>
                <A
                  class="btn btn-default"
                  href="www.linkedin.com/in/kanek-perez-a0b569157"
                  role="button"
                >
                  LinkedIn
                </A>
                <A
                  class="btn btn-default"
                  href="https://github.com/KROHNICK"
                  role="button"
                >
                  GitHub
                </A>
              </ButtonThing>
            </Body>
          </Card>
        </SingleCard>

        <SingleCard>
          <Card>
            <Image>
              <CardImg
                src="https://avatars1.githubusercontent.com/u/44754360?s=460&v=4"
                alt="Card image cap"
              />
            </Image>

            <Body>
              <Title>
                <CardTitle>Olivia Osborn</CardTitle>
              </Title>

              <SubTitle>
                <CardSubtitle>Full Stack Web Developer</CardSubtitle>
              </SubTitle>

              {/* <Text>
          <CardText>
            Favorite Sleep Remedy: 
            <br/>
            Ideal amount of sleep: 
            </CardText>
        </Text> */}

              <ButtonThing>
                <A
                  class="btn btn-default"
                  href="https://www.linkedin.com/in/olivia-osborn-73616011a/"
                  role="button"
                >
                  LinkedIn
                </A>
                <A
                  class="btn btn-default"
                  href="https://github.com/olivia-osborn"
                  role="button"
                >
                  GitHub
                </A>
              </ButtonThing>
            </Body>
          </Card>
        </SingleCard>

        <SingleCard>
          <Card>
            <Image>
              <CardImg
                src="https://avatars2.githubusercontent.com/u/42158951?s=460&v=4"
                alt="Card image cap"
              />
            </Image>

            <Body>
              <Title>
                <CardTitle>Leland R.</CardTitle>
              </Title>

              <SubTitle>
                <CardSubtitle>Full Stack Web Developer</CardSubtitle>
              </SubTitle>

              {/* <Text>
          <CardText>
            Favorite Sleep Remedy: 
            <br/>
            Ideal amount of sleep: 
            </CardText>
        </Text> */}

              <ButtonThing>
                <A class="btn btn-default" href="" role="button">
                  LinkedIn
                </A>
                <A
                  class="btn btn-default"
                  href="https://github.com/ltrii"
                  role="button"
                >
                  GitHub
                </A>
              </ButtonThing>
            </Body>
          </Card>
        </SingleCard>

        <SingleCard>
          <Card>
            <Image>
              <CardImg src={D} className="D" alt="Card image cap" />
            </Image>

            <Body>
              <Title>
                <CardTitle>Dillon McElhinney</CardTitle>
              </Title>

              <SubTitle>
                <CardSubtitle>iOS Developer</CardSubtitle>
              </SubTitle>

              {/* <Text>
          <CardText>
            Favorite Sleep Remedy: 
            <br/>
            Ideal amount of sleep: 
            </CardText>
        </Text> */}

              <ButtonThing>
                <A
                  class="btn btn-default"
                  href="https://www.linkedin.com/in/dillon-mce/"
                  role="button"
                >
                  LinkedIn
                </A>
                <A
                  class="btn btn-default"
                  href="https://github.com/dillon-mce"
                  role="button"
                >
                  GitHub
                </A>
              </ButtonThing>
            </Body>
          </Card>
        </SingleCard>

        <SingleCard>
          <Card>
            <Image>
              <CardImg
                src="https://avatars1.githubusercontent.com/u/44475921?s=460&v=4"
                alt="Card image cap"
              />
            </Image>

            <Body>
              <Title>
                <CardTitle>Kelli Rae Hanson</CardTitle>
              </Title>

              <SubTitle>
                <CardSubtitle>Full Stack Web Developer</CardSubtitle>
              </SubTitle>

              {/* <Text>
          <CardText>
            Favorite Sleep Remedy: 
            <br/>
            Ideal amount of sleep: 
            </CardText>
        </Text> */}

              <ButtonThing>
                <A
                  class="btn btn-default"
                  href="https://www.linkedin.com/in/kelli-rae-hanson-298b6317b/"
                  role="button"
                >
                  LinkedIn
                </A>
                <A
                  class="btn btn-default"
                  href="https://github.com/kelliraehanson"
                  role="button"
                >
                  GitHub
                </A>
              </ButtonThing>
            </Body>
          </Card>
        </SingleCard>
      </Cards>
    </div>
  );
};

export default About;
