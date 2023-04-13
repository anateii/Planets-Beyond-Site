import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import {
  Container,
  Planet,
  Text,
  Section,
} from "../styled-components/planetpage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "../Skeleton";
import { useMediaQuery } from "react-responsive";
import Navbars from "./Navbar";

const mainVariants = {
  initial: {
    opacity: 0.6,
    filter: "blur(8px)",
  },
  animated: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      type: "tweed",
    },
  },
};

export const PlanetPage = () => {
  const params = useParams();
  console.log("THIS IS PARAMS", params);

  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const fetchPlanet = async () => {
    let id = params.id;
    let response = await fetch(
      "https://planets-beyond-app.onrender.com/planets/" + id
    );
    try {
      let data = await response.json();
      setTimeout(() => {
        setPlanet(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    fetchPlanet();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("PLANET", planet);

  const DesktopView = () => {
    return (
      <>
        <Main
          style={{
            backgroundImage: `url(${background})`,
            cursor: `url(${cursor}), auto`,
            backgroundPositionX: "10%",
            backgroundPositionY: "0%",
          }}
          variants={mainVariants}
          initial="initial"
          animate="animated"
        >
          <Navbars planet={planet} />
          {loading ? (
            <>
              <Container>
                <Planet>
                  {" "}
                  <Skeleton
                    width={"300px"}
                    height={"300px"}
                    borderRadius={"100%"}
                  />
                </Planet>
                <Text>
                  <Skeleton
                    width={"100px"}
                    height={"20px"}
                    borderRadius={"1px"}
                  />
                  <Skeleton
                    width={"400px"}
                    height={"20px"}
                    borderRadius={"1px"}
                    number={6}
                  />
                </Text>
              </Container>
              <Section>
                <Skeleton
                  width={"80%"}
                  height={"80px"}
                  number={4}
                  borderRadius={"1px"}
                />
              </Section>
            </>
          ) : (
            <>
              {planet && (
                <>
                  <Container>
                    <Planet>
                      <motion.img
                        src={planet.imgOv}
                        alt=""
                        initial={{ filter: "blur(8px)" }}
                        animate={{ filter: "blur(0px)", scale: [0, 1.1] }}
                      />
                    </Planet>
                    <Text>
                      <motion.h1
                        initial={{ filter: "blur(8px)" }}
                        animate={{ filter: "blur(0px)" }}
                      >
                        {planet.name}
                      </motion.h1>

                      <motion.h6
                        initial={{ filter: "blur(8px)" }}
                        animate={{ filter: "blur(0px)" }}
                      >
                        {planet.description}
                      </motion.h6>
                      <motion.div
                        initial={{ filter: "blur(8px)" }}
                        animate={{ filter: "blur(0px)" }}
                      >
                        Source:
                        <div
                          onClick={() => {
                            window.open(
                              "https://solarsystem.nasa.gov/planets/neptune/overview/",
                              "_blank"
                            );
                          }}
                        >
                          Nasa
                          <i className="bi bi-box-arrow-up-right"></i>
                        </div>
                      </motion.div>
                    </Text>
                  </Container>
                  <Section>
                    <div>
                      <h6>ROTATION TIME</h6>
                      <h3>{planet.rotation} DAYS</h3>
                    </div>
                    <div>
                      <h6>REVOLUTION TIME</h6>
                      <h3>{planet.revolution} YEARS</h3>
                    </div>
                    <div>
                      <h6>RADIUS</h6>
                      <h3>{planet.radius} KM</h3>
                    </div>
                    <div>
                      <h6>AVERAGE TEMP.</h6>
                      <h3>{planet.temperature}°C</h3>
                    </div>
                  </Section>
                </>
              )}
            </>
          )}{" "}
        </Main>
      </>
    );
  };

  const MobileView = () => {
    return (
      <Main
        style={{
          backgroundImage: `url(${background})`,
          cursor: `url(${cursor}), auto`,
          backgroundPositionX: "20%",
          backgroundPositionY: "10%",
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars planet={planet} />

        {planet && (
          <div className="planetOverviewWrapper">
            <img src={planet.imgOv} alt="" />
            <h1>{planet.name}</h1>
            <div>{planet.description}</div>
            <section>
              <div>
                <h6>ROTATION TIME</h6>
                <h3>{planet.rotation} DAYS</h3>
              </div>
              <div>
                <h6>REVOLUTION TIME</h6>
                <h3>{planet.revolution} YEARS</h3>
              </div>
              <div>
                <h6>RADIUS</h6>
                <h3>{planet.radius} KM</h3>
              </div>
              <div>
                <h6>AVERAGE TEMP.</h6>
                <h3>{planet.temperature}°C</h3>
              </div>
            </section>
          </div>
        )}
      </Main>
    );
  };

  return (
    <>
      {isTabletOrMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </>
  );
};
