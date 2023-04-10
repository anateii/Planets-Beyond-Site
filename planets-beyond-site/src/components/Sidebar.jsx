import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/astronauts/IntroA1.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "../index.css";

const Sidebar = ({ planet }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [sidebarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const sidebarClass = sidebarOpen ? "sidebar open" : "sidebar";

  return (
    <>
      <SideBar className={sidebarClass}>
        <Icon
          onClick={() => navigate(`/planet/${params.id}/internal-structure`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: "#fff",
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600,
          }}
          transition={{ type: "tweed" }}
        >
          Internal Structure
        </Icon>
        <Icon
          onClick={() => navigate(`/planet/${params.id}/surface-geology`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: "#fff",
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600,
          }}
          transition={{ type: "tweed" }}
        >
          Surface Geology
        </Icon>
        <Icon
          onClick={() => navigate(`/reviews/${params.id}`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: "#fff",
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600,
          }}
          transition={{ type: "tweed" }}
        >
          Reviews
        </Icon>
        <Icon
          onClick={() => navigate(`/buy-ticket/${params.id}`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: "#fff",
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600,
          }}
          transition={{ type: "tweed" }}
        >
          Pricing
        </Icon>

        <Icon
          onClick={() => {
            navigate("/destination");
          }}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: "#fff",
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600,
          }}
          transition={{ type: "tweed" }}
        >
          <div>
            <img src={rocket} alt="" />
            Go back
          </div>
        </Icon>
      </SideBar>{" "}
      <Icon
        whileHover={{
          scale: 1.1,
          originX: 0,
          color: "#fff",
          textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
          fontWeight: 600,
        }}
        transition={{ type: "tweed" }}
      >
        <i
          className="bi bi-chevron-double-right sidebar-toggle"
          onClick={toggleSidebar}
        ></i>
      </Icon>
    </>
  );
};

export default Sidebar;
