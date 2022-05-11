import { Main, Title, Button, Subtitle } from "../styled-components/homepage";
import background from "../assets/background3.jpg";
import { useNavigate } from "react-router-dom";
import cursor from "../assets/cursor.png";

const mainVariants = {
  initial: {
    opacity: 0.6,
  },
  animated: {
    opacity: 1,
    transition: {
      duration: 0.7,
      type: "spring",
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
    >
      <Title animate={{ y: [-300, 0] }} transition={{ duration: 2.5 }}>
        Planets Beyond
      </Title>
      <Subtitle animate={{ y: [-350, 0] }} transition={{ duration: 1.5 }}>
        Curious about our Neighboors?
      </Subtitle>

      <Button
        onClick={() => navigate("/destination")}
        style={{ cursor: `url(${cursor}), auto` }}
        variants={buttonVariants}
        initial="initial"
        animate="animated"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
          boxShadow: "0px 0px 15px 1px rgb(7,7,36,0.3)",
        }}
      >
        Start your Journey
      </Button>
    </Main>
  );
};
