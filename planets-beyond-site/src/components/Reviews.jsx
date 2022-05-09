import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Sidebar from "./Sidebar";
import { Container, Avatar } from "../styled-components/reviews";
import { Carousel } from "react-bootstrap";
import "../index.css"
import a1 from "../assets/astronauts/A1.png"
import a2 from "../assets/astronauts/A2.png"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



export const Reviews = () => {

const params = useParams()
console.log("REVIEW PARAMS", params)

const [result,setResult] = useState(null)


useEffect(()=>{

  fetchReviews()
}, [])


const fetchReviews = async() => {
  let id = params.id;
  let response = await fetch("http://localhost:8000/planets/" + id);

  try {
    const data = await response.json()
    console.log("data review", data)
    setResult(data)
  } catch (error) {
    console.log("There was an error", error);
  }
}

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
        {result && ( <Carousel fade>
            <Carousel.Item>
              <div>
                <img src={result.images.img1} alt="" />
              </div>
              <div><h4>{result.users.review1}</h4></div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
                <img src={result.images.img2} alt="" />
              </div>
              <div><h4>{result.users.review2}</h4></div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
                <img src={result.images.img3} alt="" />
              </div>
              <div><h4>{result.users.review3}</h4></div>
            </Carousel.Item>
          </Carousel>)}
        </Avatar>
      </Container>
    </Main>
  );
};
