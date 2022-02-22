import NavBar from "../components/NavBar";
import styled, { createGlobalStyle } from "styled-components";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <NavBar />
      </Wrap>
    </>
  );
}

export default HomePage;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 100% 100%;
  background-image: url(${require("../images/onsilrium8.jpg")});
`;
