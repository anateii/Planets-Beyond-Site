import { Main } from "../styled-components/homepage"
import starsBackground from "../assets/stars.svg"
import cursor from "../assets/cursor.png"
import Sidebar from "./Sidebar"
import { useState } from "react"

export const PlanetPage =() => {

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };



return (
    <Main style={{backgroundImage: `url(${starsBackground})`, cursor: `url(${cursor}), auto`}}>
       <Sidebar  isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
           
    </Main>
)
}