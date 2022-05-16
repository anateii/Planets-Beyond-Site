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
        backgroundPositionX: "20%",
        backgroundPositionY: "0%",
        cursor: `url(${cursor}), auto`,
      }}
    >
      <Sidebar />
      <Container>
         <div>

         </div>
         <Button>Let's gooo!</Button>
      </Container>
    </Main>
  );
};
