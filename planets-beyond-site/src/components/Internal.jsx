import { Main } from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import cursor from "../assets/cursor.png"
import Sidebar from "./Sidebar"
import { Container, Section, Planet, Text } from "../styled-components/planetpage"



export const Internal =({planets}) => {

   


    return(
<Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>

<Sidebar />

{
      planets && (
        <>
            <Container>
            <Planet>
              <img src={planets.imgInt} alt="" />
            </Planet>
            <Text>
              <h1>{planets.name}</h1>
              <h6>{planets.internal}</h6>
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
                  <i class="bi bi-box-arrow-up-right"></i>
                </div>
              </div>
            </Text>
           </Container>
          <Section>
            <div>
              <h6>ROTATION TIME</h6>
              <h3>{planets.rotation} DAYS</h3>
            </div>
            <div>
              <h6>REVOLUTION TIME</h6>
              <h3>{planets.revolution} YEARS</h3>
            </div>
            <div>
              <h6>RADIUS</h6>
              <h3>{planets.radius} KM</h3>
            </div>
            <div>
              <h6>AVERAGE TEMP.</h6>
              <h3>{planets.temperature}°C</h3>
            </div>
           </Section>
       </>)}
    
    </Main>


    )
}

