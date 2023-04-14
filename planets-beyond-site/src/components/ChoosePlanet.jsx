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
import Skeleton from "../Skeleton";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-bootstrap";

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

export const ChoosePlanet = ({ planets, loading }) => {
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const DesktopView = () => {
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
          {loading ? (
            <Container>
              <Skeleton
                width={"150px"}
                height={"150px"}
                borderRadius={"100%"}
                number={8}
              />
            </Container>
          ) : (
            <>
              {planets &&
                planets.map((planet) => (
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
            </>
          )}
        </Container>
      </Main>
    );
  };

  const MobileView = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          cursor: `url(${cursor}), auto`,
          backgroundPositionX: "0%",
          backgroundPositionY: "20%",
          height: "100vh",
          overflowY: "hidden",
          position: "absolute",
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
        <Carousel fade className="carouselPlanets">
          {planets &&
            planets.map((planet) => (
              <Carousel.Item
                onClick={() => navigate(`/planet/${planet.id}/overview`)}
                key={planet.id}
                whileHover={{
                  scale: 1.3,
                  fontWeight: 600,
                }}
                className="carouselItems"
              >
                <div>
                  <img src={planet.imgOv} alt="" />
                  <h4>{planet.name}</h4>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    );
  };

  return (
    <>
      {isTabletOrMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </>
  );
};
