import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/rocket.png";
import { useNavigate } from "react-router-dom";
import eye from "../assets/eye.png";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SideBar>
      <Icon>Overview</Icon>
      <Icon>Internal Structure</Icon>
      <Icon>Surface Geology</Icon>
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
  );
};

export default Sidebar;
