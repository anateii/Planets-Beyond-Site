import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container } from "../styled-components/buyticket";
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
          Hello
      </Container>
    </Main>
  );
};
