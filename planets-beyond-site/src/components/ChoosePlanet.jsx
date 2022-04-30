import { Main } from "../styled-components/homepage";
import starsBackground from "../assets/stars.svg";
import {
  Title,
  Subtitle,
  Container,
  Col,
} from "../styled-components/chooseplanet";
import { useNavigate } from "react-router-dom";
import Mercury from "../assets/planet-mercury.svg";
import Venus from "../assets/planet-venus.svg";
import Earth from "../assets/planet-earth.svg";
import Mars from "../assets/planet-mars.svg";
import Jupiter from "../assets/planet-jupiter.svg";
import Saturn from "../assets/planet-saturn.svg";
import Uranus from "../assets/planet-uranus.svg";
import Neptune from "../assets/planet-neptune.svg";

export const ChoosePlanet = () => {
  const navigate = useNavigate();

  return (
    <Main style={{ backgroundImage: `url(${starsBackground})` }}>
      <Title>Where next?</Title>
      <Subtitle>Choose your destination</Subtitle>
      <Container>
        <Col onClick={() => navigate("/planet")}>
          <div>
            <img src={Mercury} alt="" />
            <span>Mercury</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Venus} alt="" />
            <span>Venus</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Earth} alt="" />
            <span>Earth</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Mars} alt="" />
            <span>Mars</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Jupiter} alt="" />
            <span>Jupiter</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Saturn} alt="" />
            <span>Saturn</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Uranus} alt="" />
            <span>Uranus</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Neptune} alt="" />
            <span>Neptune</span>
          </div>
        </Col>
      </Container>
    </Main>
  );
};
