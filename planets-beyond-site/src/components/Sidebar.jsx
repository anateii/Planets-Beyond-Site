import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/rocket.png";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const params = useParams()
 console.log("sidebar params", params)




  return (
    <>
      <SideBar>
        
        <Icon onClick={()=>(navigate(`/planet/internal-structure`))}>Internal Structure</Icon>
        <Icon onClick={()=>(navigate("/planet/:id/surface-geology"))}>Surface Geology</Icon>
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
