import styled from "styled-components";
import NavBarBlack from "../components/NavBarBlack";

function MakerPage() {
  return (
    <Wrap>
      <NavBarBlack />
      <FlexGrow>
        <Board>
          <Maker />
          안녕하세요 반가워요 잘있어요 다시만나요
        </Board>
      </FlexGrow>
    </Wrap>
  );
}

export default MakerPage;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${require("../images/room.jpg")});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
`;
const FlexGrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;
const Board = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1860px;
  margin: 0 auto;
  width: 1600px;
  height: 700px;
  background-color: #888888;
  background: linear-gradient(483deg, #000, #888888, #fff);
`;
const Maker = styled.img`
  background-image: url(${require("../images/Makerimg.jpg")});
  background-size: 100% 100%;
  width: 500px;
  height: 500px;
  margin: 0 100px;
`;
