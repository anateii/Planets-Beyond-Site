import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container, Button } from "../styled-components/buyticket";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const mainVariants = {
  initial: {
    opacity: 0.6,
    filter: "blur(8px)",
  },
  animated: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      type: "tweed",
    },
  },
};


const buttonVariants = {
  initial: {
    y: "-300vw",
    opacity: 0,
  },
  animated: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px rgb(7,7,36,0.5)",
    boxShadow: "0px 0px 8px 1px #fff",
  },

}



export const BuyTicket = () => {
  const navigate = useNavigate()
  const params = useParams();
  console.log("REVIEW PARAMS", params);

  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchReviews = async () => {
    let id = params.id;
    let response = await fetch("http://localhost:8000/planets/" + id);

    try {
      const data = await response.json();
      console.log("data review", data);
      setResult(data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  return (
    <Main
      style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
        backgroundPositionX: '100%',
        backgroundPositionY: '45%',
      }}
      variants={mainVariants}
      initial="initial"
      animate="animated"
    >
      <Sidebar />
      <Container>
        {result && (
          <> 
         
            <div>
              <h3>Suite for {result.name}</h3>
              <span>Price: {result.ticketSuite.price} ETH</span>
              <p>Time in space: {result.ticketSuite.time} </p>
              <p>Spacecraft: {result.ticketSuite.spacecraft}</p>
              <p>Private Quarters: {result.ticketSuite.quarters} </p>
              <p>Mission: {result.ticketSuite.mission}</p> 
              <Button 
              onClick={()=> navigate(`/summary/${result.id}`)}
              variants={buttonVariants}
              whileHover="hover"
              
              >Launch Suite</Button>
            </div>
            <div>
              <h3> Basic for {result.name}</h3>
              <span>Price: {result.ticketBasic.price} ETH</span>
              <p>Time in space: {result.ticketBasic.time}</p>
              <p>Spacecraft: {result.ticketBasic.spacecraft}</p>
              <p>Private Quarters: {result.ticketBasic.quarters}</p> 
              <p>Mission: {result.ticketBasic.mission}</p>
              <Button onClick={()=> navigate(`/summary/${result.id}`)}>Launch Basic</Button>
            </div>
           
          </>
        )}
      </Container>
    </Main>
  );
};
