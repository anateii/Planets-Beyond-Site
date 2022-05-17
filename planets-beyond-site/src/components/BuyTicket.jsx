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
        backgroundPositionX: '20%',
        backgroundPositionY: '0%',
        cursor: `url(${cursor}), auto`,
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
              <p className="btc">Price: </p>
              <p>Time in space: </p>
              <p>Spacecraft: </p>
              <p>Private Quarters: </p>
              <p>Featured: </p> 
              <Button onClick={()=> navigate(`/summary/${result.id}`)}>I want Suite</Button>
            </div>
            <div>
              <h3> Basic for {result.name}</h3>
              <p className="btc">Price: </p>
              <p>Time in space: </p>
              <p>Spacecraft: </p>
              <p>Private Quarters:</p> 
              <p>Features: </p>
              <Button>I want Basic</Button>
            </div>
           
          </>
        )}
      </Container>
    </Main>
  );
};
