import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import LoggedInSideNav from "../Nav/LoggedInSideNav.js";
import MobileNav from "../Nav/MobileNav.js";
import Footer from "../Footer/Footer.js";

import D from "./dillon_profile_photo.jpg";

const Cards = styled.div`
  width: 95%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgb(255, 255, 255, 0.09);
  padding: 20px;

  @media (max-width: 500px) {
    margin: 20px auto;
    // margin-right: 20px;
    // margin-left: 20px;
  }
`;

const SingleCard = styled.div`
  width: 280px;
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
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

const Title = styled.h2`
  font-size: 22px;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  text-shadow: 2px 2px #0a1428;
`;

const SubTitle = styled.p`
  font-size: 14px;
  letter-spacing: 2px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  text-shadow: 2px 2px #0a1428;
`;

const ButtonThing = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const A = styled.a`
  display: flex;
  justify-content: space-evenly;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 90px;
  background: #e34a6f;
  color: white;
  border-radius: 5px;
  text-align: center;
  border: none;

  &:hover {
    background: white;
    color: #e34a6f;
  }
`;

const Body = styled(CardBody)`
  // background-color: #303848;
  background-color: #0a1429;
`;

const About = props => {
  return (
    <div className="navHolder">
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

              <ButtonThing>
                <A
                  class="btn btn-default"
                  href="https://www.linkedin.com/"
                  role="button"
                >
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

              <ButtonThing>
                <A
                  class="btn btn-default"
                  href="https://www.linkedin.com/in/kanek-perez-a0b569157"
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
      </Cards>
        <div>
          <Footer />
        </div>
    </div>
  );
};

export default About;
