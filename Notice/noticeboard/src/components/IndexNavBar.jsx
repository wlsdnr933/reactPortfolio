import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Wrap>
      <Container>
        <TitleLink to="/">ONSIRIUM</TitleLink>
        <Buttonflex>
          <NavBarButton to="/login">Login</NavBarButton>
          <NavBarButton to="#">Sign up</NavBarButton>
        </Buttonflex>
      </Container>
    </Wrap>
  );
}

export default NavBar;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1860px;
  width: 100%;
  flex-wrap: wrap;
  height: 128px;
  aligin-text: center;
`;
const TitleLink = styled(Link)`
  list-style: none;
  margin-top: 20px;
  margin: 20px;
  font-size: 30px;
  color: white;
  text-decoration: none;
`;
const Buttonflex = styled.div`
  display: flex;
`;
const NavBarButton = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  padding-left: 50px;
`;
