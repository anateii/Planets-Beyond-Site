import { Main } from "../styled-components/homepage"
import Sidebar from "./Sidebar"
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import { Container } from "../styled-components/summary";

export const ThankYouPage =() => {

    return(


        <Main
        style={{
            backgroundImage: `url(${background})`,
            backgroundPositionX: '40%',
            backgroundPositionY: '0%',
            cursor: `url(${cursor}), auto`,
          }}>
            <Sidebar/>
            <Container style={{height: "400px", top: "25%" }}>
              <h3 style={{marginLeft:"2em", transform: "translateY(130px)", fontFamily:"League Spartan"}}>Congratulations <br /> on your new adventure!!</h3>
              <h6 style={{marginLeft:"2em", transform: "translateY(130px)", fontWeight: "300"}}>Check your inbox for the next steps!</h6>
                <img src="https://i.ibb.co/Gkjn6Ms/A11.png" alt="" style={{width:"300px", margin: "-3em 2em"}} />
            </Container>
        </Main>
    )
}