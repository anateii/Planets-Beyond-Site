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
import planets from "../data/db.json";

const mainVariants = {
  initial: {
    opacity: 0.6,
    filter: "blur(8px)",
  },
  animated: {
    filter: "blur(0px)",
    opacity: 1,
    duration: 2,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
  exit: {
    transition: { ease: "easeInAndOut" },
  },
};

export const ChoosePlanet = () => {
  const navigate = useNavigate();
  console.log("THIS IS  PLANETS DB", planets);
  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
        backgroundPositionX: "0%",
        backgroundPositionY: "20%",
      }}
      variants={mainVariants}
      initial="initial"
      animate="animated"
      exit="exit"
    >
      <Title
        animate={{ x: [-300, 0] }}
        transition={{ type: "spring", duration: 1 }}
      >
        Where next?
      </Title>
      <Subtitle
        animate={{ x: [-150, 0] }}
        transition={{ type: "spring", duration: 1 }}
      >
        Choose your destination
      </Subtitle>

      <Container>
        {planets &&
          planets.planets.map((planet) => (
            <Col
              onClick={() => navigate(`/planet/${planet.id}/overview`)}
              key={planet.id}
              whileHover={{
                scale: 1.3,
                fontWeight: 600,
              }}
            >
              <div>
                <img src={planet.imgOv} alt="" />
                <h4>{planet.name}</h4>
              </div>
            </Col>
          ))}
      </Container>
    </Main>
  );
};
