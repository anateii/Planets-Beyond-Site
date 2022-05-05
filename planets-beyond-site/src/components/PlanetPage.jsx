import { Main } from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import cursor from "../assets/cursor.png"
import Sidebar from "./Sidebar"
import { useState } from "react"
import { Container,Planet, Text } from "../styled-components/planetpage"
import { useParams } from "react-router-dom"

export const PlanetPage =() => {

const params = useParams()
console.log("THIS IS PARAMS",params)


return (
    <Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>
       <Sidebar/>
       <Container>
         <Planet> 1</Planet>
         <Text>2</Text>
       </Container>
           
    </Main>
)
}