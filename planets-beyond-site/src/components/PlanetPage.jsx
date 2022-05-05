import { Main } from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import cursor from "../assets/cursor.png"
import Sidebar from "./Sidebar"
import { Container,Planet, Text } from "../styled-components/planetpage"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PlanetPage =() => {

 
const params = useParams()
console.log("THIS IS PARAMS", params)

const [planet, setPlanet] = useState([])

  const fetchPlanet = async() =>{
    
    let id = params.id
    let response = await fetch("http://localhost:8000/planets/" + id)
    try {
      let data = await response.json()
      console.log("DATA", data)
      setPlanet(data)
    } catch (error) {
      console.log("There was an error", error)
    }
  }

  useEffect(() => {
  fetchPlanet()
    
  }, [])
  



return (
    <Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>
       <Sidebar/>
       <Container>
         <Planet> 
           <img src={planet.imgOv} alt="" />
         </Planet>
         <Text>
           <h1>{planet.name}</h1>
           {planet.description}</Text>
       </Container>
           
    </Main>
)
}