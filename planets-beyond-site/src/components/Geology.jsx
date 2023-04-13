import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Navbars from "./Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Section,
  Planet,
  Text,
} from "../styled-components/planetpage";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const mainVariants = {
  initial: {
    filter: "blur(8px)",
  },
  animated: {
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      type: "tweed",
    },
  },
};

export const Geology = () => {
  const params = useParams();
  const [result, setResult] = useState([]);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResult = async () => {
    let id = params.id;
    let response = await fetch(
      "https://planets-beyond-app.onrender.com/planets/" + id
    );

    try {
      let data = await response.json();
      console.log("GEOLOGY DATA", data);
      setResult(data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  const DesktopView = () => {
    return (
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
        <Navbars />
        <Container>
          <Planet>
            <motion.img
              src={result.imgInt ? result.imgInt : ""}
              alt=""
              animate={{ scale: [0, 1.1] }}
            />
          </Planet>
          <Text>
            <h1>{result.name}</h1>
            <h6>{result.internal}</h6>
            <div>
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
            </div>
          </Text>
        </Container>
        <Section>
          <div>
            <h6>ROTATION TIME</h6>
            <h3>{result.rotation} DAYS</h3>
          </div>
          <div>
            <h6>REVOLUTION TIME</h6>
            <h3>{result.revolution} YEARS</h3>
          </div>
          <div>
            <h6>RADIUS</h6>
            <h3>{result.radius} KM</h3>
          </div>
          <div>
            <h6>AVERAGE TEMP.</h6>
            <h3>{result.temperature}°C</h3>
          </div>
        </Section>
      </Main>
    );
  };

  const MobileView = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          cursor: `url(${cursor}), auto`,
          backgroundPositionX: "20%",
          backgroundPositionY: "10%",
          color: "white",
          overflowY: "hidden",
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars planet={result} />

        {result && (
          <div className="planetOverviewWrapper">
            <img src={result.imgGeo} alt="" />
            <h1>{result.name}</h1>
            <div>{result.geology}</div>
            <section>
              <div>
                <h6>ROTATION TIME</h6>
                <h3>{result.rotation} DAYS</h3>
              </div>
              <div>
                <h6>REVOLUTION TIME</h6>
                <h3>{result.revolution} YEARS</h3>
              </div>
              <div>
                <h6>RADIUS</h6>
                <h3>{result.radius} KM</h3>
              </div>
              <div>
                <h6>AVERAGE TEMP.</h6>
                <h3>{result.temperature}°C</h3>
              </div>
            </section>
          </div>
        )}
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
