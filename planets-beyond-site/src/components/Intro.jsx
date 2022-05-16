import { Main } from "../styled-components/homepage"
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Intro =() =>{

  const navigate=useNavigate()

    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    return redirectNow ? (
      navigate('/homepage')
    ) : (
      <Main  style={{
        backgroundImage: `url(${background})`,
        cursor: `url(${cursor}), auto`,
      }}>
          HELLO
      </Main>
    );

}