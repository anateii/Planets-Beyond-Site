import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import rocket from "../assets/astronauts/IntroA1.png";
import { useNavigate, useParams } from "react-router-dom";

const Navbars = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <div
            onClick={() => {
              navigate("/destination");
            }}
          >
            <img src={rocket} alt="" className="rocketImg" />
            Go back
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() =>
                navigate(`/planet/${params.id}/internal-structure`)
              }
            >
              Internal Structure
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate(`/planet/${params.id}/surface-geology`)}
            >
              Surface Geology
            </Nav.Link>
            <Nav.Link onClick={() => navigate(`/reviews/${params.id}`)}>
              Reviews
            </Nav.Link>
            <Nav.Link onClick={() => navigate(`/buy-ticket/${params.id}`)}>
              Packages
            </Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
