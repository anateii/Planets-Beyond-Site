import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Navbars from "./Navbar";
import { Container, Button } from "../styled-components/summary";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const mainVariants = {
  initial: {
    opacity: 0.6,
    filter: "blur(8px)",
  },
  animated: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      type: "tweed",
    },
  },
};

const buttonVariants = {
  initial: {
    x: "-300vw",
    y: 0,
    opacity: 0,
  },
  animated: {
    x: 0,
    y: "20px",
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px rgb(7,7,36,0.5)",
    boxShadow: "0px 0px 8px 1px #fff5",
  },
};

export const SummaryPage = ({ planets }) => {
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const DesktopView = () => {
    return (
      <Main
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionX: "100%",
          backgroundPositionY: "45%",
          cursor: `url(${cursor}), auto`,
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars />
        <Container>
          <form>
            <label>Personal Details</label>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <div>
              <select name="Plan">
                <option value="Basic" className="basic">
                  Basic
                </option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            <label>Payment Details</label>
            <input
              id="ccn"
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              maxlength="19"
              placeholder="xxxx xxxx xxxx xxxx"
            ></input>

            <input type="text" placeholder="CVC" />
            <input type="text" placeholder="MM / YYYY" />
            <Button
              onClick={() => navigate("/thank-you-page")}
              style={{ cursor: `url(${cursor}), auto` }}
              variants={buttonVariants}
              initial="initial"
              animate="animated"
              whileHover="hover"
            >
              Confirm
            </Button>
          </form>
        </Container>
      </Main>
    );
  };

  const MobileView = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionX: "100%",
          backgroundPositionY: "45%",
          cursor: `url(${cursor}), auto`,
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars />

        <form className="formMobile">
          <label>Personal Details</label>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <div>
            <select name="Plan">
              <option value="Basic" className="basic">
                Basic
              </option>
              <option value="Suite">Suite</option>
            </select>
          </div>
          <label>Payment Details</label>
          <input
            id="ccn"
            type="tel"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          ></input>

          <input type="text" placeholder="CVC" />
          <input type="text" placeholder="MM / YYYY" />
          <Button
            onClick={() => navigate("/thank-you-page")}
            style={{ cursor: `url(${cursor}), auto` }}
            variants={buttonVariants}
            initial="initial"
            animate="animated"
            whileHover="hover"
          >
            Confirm
          </Button>
        </form>
      </div>
    );
  };

  return (
    <>
      {isTabletOrMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </>
  );
};
