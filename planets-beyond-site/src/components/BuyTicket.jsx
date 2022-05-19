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
  const navigate = useNavigate();
  const params = useParams();
  console.log("REVIEW PARAMS", params);

  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchReviews = async () => {
    let id = params.id;
    let response = await fetch(
      "https://json-server-demoday.herokuapp.com/planets/" + id
    );

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
        backgroundPositionX: "100%",
        backgroundPositionY: "45%",
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
              <h3>Suite for <strong>{result.name}</strong></h3>
              <span>Price: {result.ticketSuite.price} ETH</span>
              <p>
                <strong>Time in space:</strong> {result.ticketSuite.time}{" "}
              </p>
              <p>
                <strong>Spacecraft:</strong> {result.ticketSuite.spacecraft}
              </p>
              <p>
                <strong>Private Quarters:</strong> {result.ticketSuite.quarters}{" "}
              </p>
              <p>
                <strong>Mission:</strong> {result.ticketSuite.mission}
              </p>
              <Button onClick={() => navigate(`/summary/${result.id}`)}>
                Launch Suite
              </Button>
            </div>
            <div>
              <h3> Basic for <strong>{result.name}</strong></h3>
              <span>Price: {result.ticketBasic.price} ETH</span>
              <p>
                <strong>Time in space:</strong> {result.ticketBasic.time}{" "}
              </p>
              <p>
                <strong>Spacecraft:</strong> {result.ticketBasic.spacecraft}
              </p>
              <p>
                <strong>Private Quarters:</strong> {result.ticketBasic.quarters}{" "}
              </p>
              <p>
                <strong>Mission:</strong> {result.ticketBasic.mission}
              </p>
              <Button onClick={() => navigate(`/summary/${result.id}`)}>
                Launch Basic
              </Button>
            </div>
          </>
        )}
      </Container>
    </Main>
  );
};
