import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import {
  Title,
  Subtitle,
  Container,
  Col,
} from "../styled-components/chooseplanet";
import { useNavigate } from "react-router-dom";

export const ChoosePlanet = ({ planets }) => {
  const navigate = useNavigate();

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
      }}
    >
    
        <Title>Where next?</Title>
        <Subtitle>Choose your destination</Subtitle>
    
      <Container>
        {planets.map((planet, id) => (
          <Col
            onClick={() => navigate(`/planet/${planet.id}/overview`)}
            key={id}
          >
            <div>
              <img src={planet.imgOv} alt="" />
              <span>{planet.name}</span>
            </div>
          </Col>
        ))}
      </Container>
    </Main>
  );
};
