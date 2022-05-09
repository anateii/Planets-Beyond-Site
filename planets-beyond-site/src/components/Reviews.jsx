import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container, Avatar } from "../styled-components/reviews";
import { Carousel } from "react-bootstrap";
import "../index.css"
import a1 from "../assets/astronauts/A1.png"
import a2 from "../assets/astronauts/A2.png"



export const Reviews = () => {
  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Sidebar />
      <Container>
        <Avatar>
          <Carousel fade>
            <Carousel.Item>
              <div>
                <img src={a1} alt="" />
              </div>
              <div><h4>Comment</h4></div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
                <img src={a2} alt="" />
              </div>
              <div><h1>Comment</h1></div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
                <img src="" alt="" />
              </div>
              <div><h1>Comment</h1></div>
            </Carousel.Item>
          </Carousel>
        </Avatar>
      </Container>
    </Main>
  );
};
