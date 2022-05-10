import { Main, Title, Button, Subtitle } from "../styled-components/homepage";
import background from "../assets/background3.jpg"
import { useNavigate } from "react-router-dom";
import cursor from "../assets/cursor.png";
import {motion} from "framer-motion"

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
       objectFit:"cover",
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Title animate={{y: [-300, 0], opacity:[0,1]}}>
       Planets Beyond
        </Title>
        <Subtitle  animate={{y: [-350, 0], opacity:[0,1]}} >  
            Curious about our Neighboors?
            </Subtitle>
   

      <Button
        onClick={() => navigate("/destination")}
        style={{ cursor: `url(${cursor}), auto` }}
        animate={{opacity: [0,1]}}
      >
        Start your Journey
      </Button>
    </Main>
  );
};
