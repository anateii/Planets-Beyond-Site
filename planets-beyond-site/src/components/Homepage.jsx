import { Main, Title, Button, Subtitle } from "../styled-components/homepage";
import background from "../assets/background3.jpg";
import { useNavigate } from "react-router-dom";
import cursor from "../assets/cursor.png";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        objectFit: "cover",
        cursor: `url(${cursor}), auto`,
      }}
      animate={{ opacity: [0.3, 1]}}
      transition={{duration: 1}}
    >
      <Title animate={{ y: [-300, 0] }} transition={{  duration: 1.5 }}>
        Planets Beyond
      </Title>
      <Subtitle animate={{ y: [-350, 0] }} transition={{  duration: 2.5 }}>
        Curious about our Neighboors?
      </Subtitle>

      <Button
        onClick={() => navigate("/destination")}
        style={{ cursor: `url(${cursor}), auto` }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        Start your Journey
      </Button>
    </Main>
  );
};
