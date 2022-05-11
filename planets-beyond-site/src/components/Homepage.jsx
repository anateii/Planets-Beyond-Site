import { Main, Title, Button, Subtitle } from "../styled-components/homepage";
import background from "../assets/background3.jpg";
import { useNavigate } from "react-router-dom";
import cursor from "../assets/cursor.png";

const buttonVariants = {
initial: {
  y: '-300vw', 
  opacity: 0
},
animate: {
 y: 0, 
  opacity:1
}
}


export const Homepage = () => {
  const navigate = useNavigate();




  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        objectFit: "cover",
        cursor: `url(${cursor}), auto`,
      }}
      animate={{ opacity: [0.6, 1]}}
      transition={{duration: 0.7, type: 'spring'}}
    >
      <Title animate={{ y: [-300, 0] }} transition={{  duration: 2.5 }}>
        Planets Beyond
      </Title>
      <Subtitle animate={{ y: [-350, 0] }} transition={{  duration: 1.5 }}>
        Curious about our Neighboors?
      </Subtitle>

      <Button
        onClick={() => navigate("/destination")}
        style={{ cursor: `url(${cursor}), auto` }}

       /*  initial={{y: '-300vw'}}
        animate={{ opacity: [0, 1] , y: 0}} */
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        transition={{duration: 2 , type: 'spring'}}
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 15px rgb(7,7,36,0.5)',
          boxShadow: '0px 0px 15px 1px rgb(7,7,36,0.3)',
        
        }}
        
        
      >
        Start your Journey
      </Button>
    </Main>
  );
};
