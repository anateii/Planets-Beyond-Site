import { Button, Main, Title } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import { useNavigate } from "react-router-dom";

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

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Title animate={{ y: [-200, 0] }} transition={{ duration: 1 }}>
        Sorry, we can't find this page..{" "}
      </Title>
      <Button
        onClick={() => navigate("/")}
        style={{ cursor: `url(${cursor}), auto` }}
        variants={buttonVariants}
        initial="initial"
        animate="animated"
        whileHover="hover"
      >
        Go back
      </Button>
    </Main>
  );
};
