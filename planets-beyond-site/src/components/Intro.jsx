
import { MainIntro, Container } from "../styled-components/intro";
import background from "../assets/background3.jpg";
import cursor from "../assets/cursor.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import astronaut from "../assets/astronauts/IntroA1.png"
import {motion} from "framer-motion"


const mainIntroVariants ={
   exit: {
    opacity: [0.6,0],
    filter: "blur(8px, 0px)",
    transition: {
        duration: 3,
        type: "easeOut" },
        transitionEnd: { display: "none" }
   }
}


export const Intro =() =>{

  const navigate=useNavigate()

    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    return redirectNow ? (
      navigate('/homepage')
    ) : (
      <>
          <MainIntro  style={{
            backgroundImage: `url(${background})`,
            objectFit: "cover",
            cursor: `url(${cursor}), auto`,
          }}
          variants ={mainIntroVariants}

          
                exit="exit"
          >
          </MainIntro> 
          <Container>
                <img src={astronaut} alt="" style={{width: "auto"}}  />
                 <motion.h5
                animate={{y: [10,0,10], opacity: [0.4,1,0.4], duration: 5}}
                transition={{yoyo: Infinity }}
                 >LOADING...</motion.h5>
              </Container>
      </>
    );

}
