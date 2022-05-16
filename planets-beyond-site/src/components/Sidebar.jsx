import { SideBar, Icon } from "../styled-components/planetpage";
import rocket from "../assets/astronauts/IntroA1.png";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = ({ planet }) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("sidebar planet", planet);
  console.log("sidebar params", params.id);

  return (
    <>
      <SideBar>
      {/*   <Icon
          onClick={() => navigate(`/planet/${params.id}/overview`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: ["#ffffff60", "#fff"],
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Overview
        </Icon> */}
        <Icon
          onClick={() => navigate(`/planet/${params.id}/internal-structure`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: ["#ffffff60", "#fff"],
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Internal Structure
        </Icon>
        <Icon
          onClick={() => navigate(`/planet/${params.id}/surface-geology`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: ["#ffffff60", "#fff"],
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Surface Geology
        </Icon>
        <Icon
          onClick={() => navigate(`/reviews/${params.id}`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: ["#ffffff60", "#fff"],
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Reviews
        </Icon>
        <Icon
          onClick={() => navigate(`/buy-ticket/${params.id}`)}
          whileHover={{
            scale: 1.1,
            originX: 0,
            color: ["#ffffff60", "#fff"],
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600
          }}
          transition={{ type: "spring", stiffness: 200 }}
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
            color: ["#ffffff60", "#fff"],
            textShadow: "0px 0px 15px rgb(7,7,36,0.5)",
            fontWeight: 600
          }}
          transition={{ type: "spring", stiffness: 200 }}
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
