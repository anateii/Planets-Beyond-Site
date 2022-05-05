import { Main } from "../styled-components/homepage";
import starsBackground from "../assets/stars.svg";
import cursor from "../assets/cursor.png"
import {
  Title,
  Subtitle,
  Container,
  Col,
} from "../styled-components/chooseplanet";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export const ChoosePlanet = () => {
  const navigate = useNavigate();
  const [planets, setPlanets]= useState([])

  useEffect(()=>{
    fetchPlanets()
  }, [])


  const fetchPlanets = async() =>{
    let response = await fetch("http://localhost:8000/planets/")
    try {
      let data = await response.json()
      console.log("DATA", data)
      console.log (data.hello[0])
      setPlanets(data)
    } catch (error) {
      console.log("There was an error", error)
    }
  }

  return (
    <Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>
      <Title>Where next?</Title>
      <Subtitle>Choose your destination</Subtitle>
      <Container>
       {planets.map((planet, id)=>( 
       
       <Col onClick={() => navigate(`/planet/${planet.id}`)} key={id}>
          <div>
            <img src={planet.imgOv} alt="" />
            <span>{planet.name}</span>
          </div>
        </Col> ))}
      </Container>
    </Main>
  );
};
