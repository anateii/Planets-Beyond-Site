import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container, Button } from "../styled-components/summary";
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
          <label>Personal Details</label>
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="email" placeholder="Email" />
         <div>
            <input type="text" placeholder="DD"/>
            <input type="text" placeholder="MM"/>
            <input type="text" placeholder="YYYY"/>
         </div>
         <label>Payment Details</label>
         <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}"  maxlength="19" placeholder="xxxx xxxx xxxx xxxx"></input>
         <div>
           <input type="text" placeholder="CVC" />
           <input type="text" placeholder ="MM / YYYY" />
         </div>
          
        </form>
       <Button>Confirm</Button>
      </Container>
    </Main>
  );
};
