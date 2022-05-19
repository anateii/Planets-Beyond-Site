import { Button, Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container } from "../styled-components/summary";
import { useParams } from "react-router-dom";



export const SummaryPage = ({planets} ) => {
 const params = useParams()
console.log("PARAMS OF SUMMARY", params)
console.log("SUMMARY PLANETS", planets[2])



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
        <form>
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="email" placeholder="Email" />
        </form>
       <Button>Confirm</Button>
      </Container>
    </Main>
  );
};
