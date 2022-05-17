import { Button, Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container } from "../styled-components/summary";
import { useParams } from "react-router-dom";

export const SummaryPage = () => {
 const params = useParams()
console.log("PARAMS OF SUMMARY", params)

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        backgroundPositionX: '100%',
        backgroundPositionY: '45%',
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Sidebar />
      <Container>
         <div>
          <h3>Congratulations!
          </h3>
          <h6>Your next departure is scheduled for: </h6>
         </div>
      </Container>
    </Main>
  );
};
