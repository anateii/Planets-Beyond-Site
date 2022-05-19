import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container, Button } from "../styled-components/summary";
import { useParams, useNavigate } from "react-router-dom";



const buttonVariants = {
  initial: {
    x: "-300vw",
    y: 0,
    opacity: 0,
  },
  animated: {
    x: 0,
    y: "-30px",
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px rgb(7,7,36,0.5)",
    boxShadow: "0px 0px 8px 1px #fff5",
  },
};



export const SummaryPage = ({planets} ) => {

  const navigate= useNavigate()
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
            <label>Choose your plan</label>
            <select name="Plan">
              <option value="Basic">Basic</option>
              <option value="Suite">Suite</option>
            </select>
         </div>
         <label>Payment Details</label>
         <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}"  maxlength="19" placeholder="xxxx xxxx xxxx xxxx"></input>
         <div>
           <input type="text" placeholder="CVC" />
           <input type="text" placeholder ="MM / YYYY" />
         </div>
          
        </form>
       <Button
onClick={() => navigate("/thank-you-page")}
style={{ cursor: `url(${cursor}), auto` }}
variants={buttonVariants}
initial="initial"
animate="animated"
whileHover="hover"

       >Confirm</Button>
      </Container>
    </Main>
  );
};
