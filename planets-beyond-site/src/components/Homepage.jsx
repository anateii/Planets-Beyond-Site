import {Main, Title, Button, Subtitle} from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"



export const Homepage =() => {
    return (
       <Main style={{backgroundImage: `url(${starsBackground})`}}>
          <Title>
              Planets Beyond  
              <Subtitle>
             Curious about our Neighboors?
          </Subtitle>
          </Title>
        
          <Button>
        Start your Journey
          </Button>
       </Main>
    )
}

