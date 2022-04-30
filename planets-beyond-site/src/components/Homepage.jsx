import {Main, Title, Button, Subtitle} from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import { useNavigate } from "react-router-dom"


export const Homepage =() => {

const navigate = useNavigate()

    return (
       <Main style={{backgroundImage: `url(${starsBackground})`}}>
          <Title>
              Planets Beyond  
              <Subtitle>
             Curious about our Neighboors?
          </Subtitle>
          </Title>
        
          <Button onClick= {()=> (navigate("/destination"))}>
        Start your Journey
          </Button>
       </Main>
    )
}

