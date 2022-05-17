import { Main} from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import {
  Container,
  Planet,
  Text,
  Section,
} from "../styled-components/planetpage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Overview } from "./Overview";
import { motion } from "framer-motion";

const mainVariants ={
  initial: {
    opacity: 0.6,
    filter: "blur(8px)"
  },
  animated: {
    opacity: 1,
    filter: "blur(0px)",
     transition: {
      duration: 0.5,
      type: 'tweed'
     }
  }
  }


export const PlanetPage = () => {
  const params = useParams();
  console.log("THIS IS PARAMS", params);

  const [planet, setPlanet] = useState(null);

  const fetchPlanet = async () => {
    let id = params.id;
    let response = await fetch("https://json-server-demoday.herokuapp.com/planets/" + id);
    try {
      let data = await response.json();
      console.log("DATA", data);
      setPlanet(data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    fetchPlanet();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("PLANET", planet);

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
        backgroundPositionX: '10%',
        backgroundPositionY: '0%'
      }}
      
      variants={mainVariants}
        initial="initial"
        animate= "animated"
        
    >
      <Sidebar planet={planet} />
          

      {planet && (
        <>
          <Container>
            <Planet >
              <motion.img src={planet.imgOv} alt="" initial={{filter: "blur(8px)"}} animate={{filter: "blur(0px)", scale: [0,1.1]}} 
             
            />
            </Planet>
            <Text>
              <motion.h1 initial={{filter: "blur(8px)"}} animate={{filter: "blur(0px)"}}>
                {planet.name}
              </motion.h1>
              
              <motion.h6 initial={{filter: "blur(8px)"}} animate={{filter: "blur(0px)"}}>{planet.description}</motion.h6>
              <motion.div initial={{filter: "blur(8px)"}} animate={{filter: "blur(0px)"}}>
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

      {/* <Overview planet={planet} /> */}
    </Main>
  );
};
