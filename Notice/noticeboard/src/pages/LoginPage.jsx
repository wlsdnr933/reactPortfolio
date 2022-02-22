import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NavBarBlackLogin from "../components/NavBarBlackLogin";

function LoginPage() {
  return (
    <>
      <GlobalStyle />
      <NavBarBlackLogin />
      <Wrap>
        <H1>Login</H1>
        <Section>
          <Img />
          <LoginBox>
            <LoginInsideBox>
              <LoginCss>
                <label htmlFor="Login">아이디</label>
                <input id="Login" type="text" />
              </LoginCss>
              <LoginCss>
                <label htmlFor="password"> 비밀번호</label>
                <input id="password" type="password" />
              </LoginCss>
              <IdFind>
                계정 정보를 잃어버리셨나요?
                <IdfindLink to="">ID찾기 &#62; PW 찾기 &#62;</IdfindLink>
              </IdFind>
              <LoginButton>로그인</LoginButton>
            </LoginInsideBox>
          </LoginBox>
        </Section>
      </Wrap>
    </>
  );
}

export default LoginPage;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const Wrap = styled.div`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const H1 = styled.div`
  width: 100%;
  font-size: 70px;
  font-weight: 500;
  padding: 5% 0%;
  margin: 0 auto;
`;

const Section = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

const Img = styled.div`
  width: 50%;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-image: url(${require("../images/onsilrium5.jpg")});
`;

const LoginBox = styled.div`
  width: 50%;
  height: 800px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const LoginInsideBox = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

const LoginCss = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  font-size: 20px;

  label {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 10px;
    height: 40px;
  }

  input:nth-child(2) {
    margin-bottom: 30px;
  }
`;

const IdfindLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 30px;
  float: left;
`;

const IdFind = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 18%;
  background-color: brown;
  color: white;
`;
