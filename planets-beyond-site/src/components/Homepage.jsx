import { Main, Title, Button, Subtitle } from "../styled-components/homepage";
import starsBackground from "../assets/stars.svg";
import { useNavigate } from "react-router-dom";
import cursor from "../assets/cursor.png";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Main
      style={{
        backgroundImage: `url(${starsBackground})`,
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Title>
        Planets Beyond
        <Subtitle>Curious about our Neighboors?</Subtitle>
      </Title>

      <Button
        onClick={() => navigate("/destination")}
        style={{ cursor: `url(${cursor}), auto` }}
      >
        Start your Journey
      </Button>
    </Main>
  );
};
