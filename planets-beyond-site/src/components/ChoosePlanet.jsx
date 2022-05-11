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
      animate={{ opacity: [0.6, 1]}}
      transition={{duration: 0.7, type: 'spring'}}
    >
    
        <Title
        animate={{x:[ -300, 0]}}
        transition={{type: "spring", duration: 1 }}
        >Where next?</Title>
        <Subtitle
        animate={{x:[ -150, 0]}}
        transition={{type: "spring", duration: 1 }}
        >Choose your destination</Subtitle>
    
      <Container>
        {planets.map((planet, id) => (
          <Col
            onClick={() => navigate(`/planet/${planet.id}/overview`)}
            key={id}
            whileHover={{
              scale: 1.3,
              color: '#fff8',
            }}
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
