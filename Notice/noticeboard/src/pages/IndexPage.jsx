import { Link } from "react-router-dom";
import { createGlobalStyle, keyframes } from "styled-components";
import styled from "styled-components";
import IndexNavBar from "../components/IndexNavBar";

function IndexPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <IndexNavBar />
        <Section>
          <TxtBox>
            <TxtBoxGroup>
              <TxtBoxSpan style={{ animationDelay: "0s" }}>E</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.1s" }}>n</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.2s" }}>j</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.3s" }}>o</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.4s" }}>y</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.5s" }}> </TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.6s" }}>C</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.7s" }}>a</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.8s" }}>f</TxtBoxSpan>
              <TxtBoxSpan style={{ animationDelay: "0.9s" }}>e</TxtBoxSpan>
            </TxtBoxGroup>
            <Pslide>정원을 걷는 카페</Pslide>
          </TxtBox>
          <Content>
            <LinkList>
              <NavLink className="hovera" to="">
                Info
              </NavLink>
              <NavLink className="hovera" to="/home">
                Home
              </NavLink>
              <NavLink className="hovera" to="/maker">
                Maker
              </NavLink>
            </LinkList>
          </Content>
        </Section>
      </Container>
    </>
  );
}

export default IndexPage;

const GlobalStyle = createGlobalStyle`
* {          
  padding: 0;
  margin: 0;
}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${require("../images/onsilrium3.jpg")});
  display: flex;
  flex-direction: column;
`;

const TxtBox = styled.div`
  text-align: center;
  color: white;
  font-weight: 900;
`;

const TxtBoxKeyFrame = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
75% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const TxtBoxSpan = styled.span`
  animation-name: ${TxtBoxKeyFrame};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  font-size: 60px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 50px;
  float: left;
  list-style: none;
  border-bottom: 1px solid white;
  text-align: center;
  width: 33.1%;
  border-left: 1px solid white;
  padding-bottom: 20px;
`;

const PkeyFrame = keyframes`
from {
  opacity: 0;
  transform: none;
}

to {
  opacity: 1;
  transform: translateY(-5px);
}
`;

const Pslide = styled.p`
  animation-name: ${PkeyFrame};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  font-size: 20px;
`;
const Content = styled.div`
  width: 100%;
  text-align: center;
  display: inline;
  padding: 0;
`;

const LinkList = styled.div`
  font-size: 20px;
  font-weight: 900;
  & > ${NavLink}:last-child {
    border-right: 1px solid white;
  }
`;

const Section = styled.section`
  margin: 0 auto;
  width: 70%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 100px;
`;

const TxtBoxGroup = styled.div`
  font-family: "Lexend Deca", sans-serif;
  margin-bottom: 60px;
`;
