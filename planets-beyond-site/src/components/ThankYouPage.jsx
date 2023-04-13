import { Main } from "../styled-components/homepage";
import Navbars from "./Navbar";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import { Container } from "../styled-components/thankYou";
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

export const ThankYouPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const DesktopView = () => {
    return (
      <Main
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionX: "40%",
          backgroundPositionY: "0%",
          cursor: `url(${cursor}), auto`,
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars />
        <Container>
          <div>
            {" "}
            <img
              src="https://i.ibb.co/Gkjn6Ms/A11.png"
              alt=""
              style={{ width: "300px", margin: "-3em 2em" }}
            />{" "}
            <div>
              <h3
                style={{
                  fontFamily: "League Spartan",
                }}
              >
                Congratulations <br /> on your new adventure!!
              </h3>
              <h6
                style={{
                  fontWeight: "300",
                }}
              >
                Check your inbox for the next steps!
              </h6>
            </div>
          </div>
        </Container>
      </Main>
    );
  };

  const MobileView = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionX: "40%",
          backgroundPositionY: "0%",
          cursor: `url(${cursor}), auto`,
          height: "100vh",
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars />
        <div className="thankYouWrapper">
          <img
            src="https://i.ibb.co/Gkjn6Ms/A11.png"
            alt=""
            style={{ width: "300px", margin: "-3em 2em" }}
          />{" "}
          <div>
            <h3
              style={{
                fontFamily: "League Spartan",
              }}
            >
              Congratulations <br /> on your new adventure!!
            </h3>
            <h6
              style={{
                fontWeight: "300",
              }}
            >
              Check your inbox for the next steps!
            </h6>
          </div>
        </div>
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
