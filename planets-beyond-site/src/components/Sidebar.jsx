import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/rocket.png";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
const params = useParams()
console.log("THIS IS SIDEBAR PARAMS", params)


  return (
    <>
      <SideBar>
        <Icon onClick={()=>(navigate("/planet/overview"))}>Overview</Icon>
        <Icon onClick={()=>(navigate("/planet/internal-structure"))}>Internal Structure</Icon>
        <Icon onClick={()=>(navigate("/planet/surface-geology"))}>Surface Geology</Icon>
        <Icon>Reviews</Icon>
        
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
