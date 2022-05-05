import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/rocket.png";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();


  return (
    <>
      <SideBar>
        
        <Icon onClick={()=>(navigate("/planet/internal-structure"))}>Internal Structure</Icon>
        <Icon onClick={()=>(navigate("/planet/surface-geology"))}>Surface Geology</Icon>
        <Icon>Video</Icon>
        <Icon
          onClick={() => {
            navigate("/destination");
          }}
        >
          <div>
            <img src={rocket} alt="" />
            Go back
          </div>
        </Icon>
      </SideBar>
    </>
  );
};

export default Sidebar;
