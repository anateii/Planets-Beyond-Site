import { Main } from "../styled-components/homepage";
import starsBackground from "../assets/stars.svg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import  {Container, Avatar, Image} from "../styled-components/reviews"


export const Reviews = () => {
  return (
    <Main
      style={{
        backgroundImage: `url(${starsBackground})`,
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Sidebar />
      <Container>
        <Avatar>
          <Image/>

        </Avatar>
      </Container>
    </Main>
  );
};


