import { Main } from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import cursor from "../assets/cursor.png"
import Sidebar from "./Sidebar"
import { Container, Section, Planet, Text } from "../styled-components/planetpage"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"



export const Internal =({planets}) => {
   
const params = useParams()
console.log("Internal params", params)


const [result,setResult] = useState([])

useEffect(() => {
  fetchResult()
}, [])

const fetchResult = async() =>{
    let id= params.id
   let response = await fetch("http://localhost:8000/planets/" + id)
   
    try {

       let data = await response.json()
        console.log("INTERNAL DATA", data)
        setResult(data)
    } catch (error) {
        console.log("There was an error", error)
    }
}


    return(
<Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>

<Sidebar />
<Container>
   <Planet>
       <img src={result.imgInt? result.imgInt : ""} alt="" />
   </Planet> 
   <Text>
              <h1>{result.name}</h1>
              <h6>{result.internal}</h6>
              <div>
                Source:
                <div
                  onClick={() => {
                    window.open(
                      "https://solarsystem.nasa.gov/planets/neptune/overview/",
                      "_blank"
                    );
                  }}
                >
                  Nasa
                  <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </div>
            </Text>
    </Container>
    <Section>
            <div>
              <h6>ROTATION TIME</h6>
              <h3>{result.rotation} DAYS</h3>
            </div>
            <div>
              <h6>REVOLUTION TIME</h6>
              <h3>{result.revolution} YEARS</h3>
            </div>
            <div>
              <h6>RADIUS</h6>
              <h3>{result.radius} KM</h3>
            </div>
            <div>
              <h6>AVERAGE TEMP.</h6>
              <h3>{result.temperature}°C</h3>
            </div>
           </Section>

    
    </Main>


    )
}

