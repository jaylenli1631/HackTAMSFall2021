import React from "react";

// Images
import ROCKET_IMG from "../../images/retroRocket.png";

// Components
import { Pun, Wrapper } from "./Home.styles";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Pun>
          A Blast to the Past! <img src={ROCKET_IMG} />
        </Pun>
      </Wrapper>
    </>
  );
};

export default Home;
