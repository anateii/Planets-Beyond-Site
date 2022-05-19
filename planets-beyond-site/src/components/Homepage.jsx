import { Main, Title, Button, Subtitle } from "../styled-components/homepage";
import background from "../assets/background3.jpg";
import cursor from "../assets/cursor.png";
import { useNavigate } from "react-router-dom";

const mainVariants = {
  initial: {
 filter: "blur(8px)",
  },
  animated: {
    filter: "blur(0px)",
    transition: {
      duration: 2,
      type: "tween",
    },
  },
  exit: {
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const buttonVariants = {
  initial: {
    y: "-300vw",
    opacity: 0,
  },
  animated: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px rgb(7,7,36,0.5)",
    boxShadow: "0px 0px 8px 1px #fff",
  },
};

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        objectFit: "cover",
        cursor: `url(${cursor}), auto`,
      }}
      variants={mainVariants}
      initial="initial"
      animate="animated"
      exit="exit"
    >
      <Title animate={{ y: [-300, 0] }} transition={{ duration: 2.5 }}>
        Planets Beyond
      </Title>
      <Subtitle animate={{ y: [-350, 0] }} transition={{ duration: 1.5 }}>
        World's first Civilian Space Travel in the Solar System
      </Subtitle>

      <Button
        onClick={() => navigate("/destination")}
        style={{ cursor: `url(${cursor}), auto` }}
        variants={buttonVariants}
        initial="initial"
        animate="animated"
        whileHover="hover"
      >
        Start your Journey
      </Button>
    </Main>
  );
};
