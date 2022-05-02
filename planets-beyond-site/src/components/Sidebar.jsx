import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/rocket.png";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  return (
    <>
      <SideBar className={sidebarClass}>
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
        <button onClick={props.toggleSidebar} className="sidebar-toggle">
          Toggle Sidebar
        </button>
      </SideBar>
    </>
  );
};

export default Sidebar;
