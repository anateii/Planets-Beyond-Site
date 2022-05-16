
import { Main2, Container } from "../styled-components/intro";
import background from "../assets/background3.jpg";
import cursor from "../assets/cursor.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import astronaut from "../assets/astronauts/IntroA1.png"
import {motion} from "framer-motion"


const h5Variants ={
   exit: {
    opacity: [0.6,0],
    transition: {ease: "easeIn"}
   }
}


export const Intro =() =>{


  const navigate=useNavigate()

    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 5000);
    return redirectNow ? (
      navigate('/homepage')
    ) : (
      <>
          <Main2  style={{
            backgroundImage: `url(${background})`,
            objectFit: "cover",
            cursor: `url(${cursor}), auto`,
          }}
          >
          </Main2> 
          <Container>
                <img src={astronaut} alt="" style={{width: "auto"}}/>
                 <motion.h5
                animate={{y: [10,0,10], opacity: [0.4,1,0.4], duration: 5}}
                transition={{yoyo: Infinity }}
                variants ={h5Variants}
                exit="exit"
                 >LOADING...</motion.h5>
              </Container>
      </>
    );

}
