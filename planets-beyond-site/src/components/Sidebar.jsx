import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/rocket.png";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = ({planet}) => {
  const navigate = useNavigate();
  const params = useParams()
 console.log("sidebar planet", planet)
 console.log("sidebar params", params.id)






  return (
    <>
      <SideBar>
          <Icon onClick={()=>(navigate(`/planet/${params.id}/overview`))}>Overview</Icon>
          <Icon onClick={()=>(navigate(`/planet/${params.id}/internal-structure`))}>Internal Structure</Icon>
          <Icon onClick={()=>(navigate(`/planet/${params.id}/surface-geology`))}>Surface Geology</Icon>
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
