import { Main } from "../styled-components/homepage"
import Sidebar from "./Sidebar"
import background from "../assets/background3.jpg";
import cursor from "../assets/cursor.png";
import { Container } from "../styled-components/summary";

export const ThankYouPage =() => {

    return(


        <Main
        style={{
            backgroundImage: `url(${background})`,
            objectFit: "cover",
            cursor: `url(${cursor}), auto`,
          }}>
            <Sidebar/>
            <Container>
                Thank you!
            </Container>
        </Main>
    )
}