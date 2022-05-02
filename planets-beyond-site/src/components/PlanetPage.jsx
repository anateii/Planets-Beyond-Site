import { Main } from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import cursor from "../assets/cursor.png"

export const PlanetPage =() => {
return (
    <Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>
        Hello
    </Main>
)
}