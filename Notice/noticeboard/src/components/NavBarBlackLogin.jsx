import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Wrap>
      <Container>
        <TitleLink to="/">ONSIRIUM</TitleLink>
        <div>
          <NavBarButton to="/login">Login</NavBarButton>
          <NavBarButton to="#">Sign up</NavBarButton>
        </div>
      </Container>
    </Wrap>
  );
}

export default NavBar;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  padding: 0 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1860px;
  width: 100%;
  flex-wrap: wrap;
  height: 128px;
`;

const NavBarButton = styled(Link)`
  padding-left: 50px;
  color: black;
  text-decoration: none;
`;

const TitleLink = styled(Link)`
  list-style: none;
  margin-top: 20px;
  margin: 20px;
  font-size: 30px;
  color: Black;
  text-decoration: none;
`;
