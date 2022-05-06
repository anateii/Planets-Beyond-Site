import {
    Container,
    Planet,
    Text,
    Section,
  } from "../styled-components/planetpage";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export const Overview =({planet}) => {

    const params = useParams()
    console.log("Internal params", params)
    
    
    const [result,setResult] = useState([])
    
    useEffect(() => {
      fetchResult()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    return (
        <>
                  <Container>
                  <Planet>
                    <img src={result.imgOv} alt="" />
                  </Planet>
                  <Text>
                    <h1>{result.name}</h1>
                    <h6>{result.description}</h6>
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
</>
    )
}