import { Main } from "../styled-components/homepage";
import background from "../assets/background.jpg";
import cursor from "../assets/cursor.png";
import Navbars from "./Navbar";
import { Container, Avatar } from "../styled-components/reviews";
import { Carousel } from "react-bootstrap";
import "../index.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const mainVariants = {
  initial: {
    filter: "blur(8px)",
  },
  animated: {
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      type: "tweed",
    },
  },
};

export const Reviews = () => {
  const params = useParams();
  const [result, setResult] = useState(null);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchReviews = async () => {
    let id = params.id;
    let response = await fetch(
      "https://planets-beyond-app.onrender.com/planets/" + id
    );

    try {
      const data = await response.json();
      console.log("data review", data);
      setResult(data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  const DesktopView = () => {
    return (
      <Main
        style={{
          backgroundImage: `url(${background})`,
          cursor: `url(${cursor}), auto`,
          backgroundPositionX: "40%",
          backgroundPositionY: "0%",
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars />
        <Container>
          <Avatar>
            {result && (
              <Carousel fade>
                <Carousel.Item>
                  <div>
                    <img src={result.images.img1} alt="" />
                  </div>
                  <div>
                    <div>
                      <p>
                        <i className="bi bi-quote"></i>
                        {result.users.review1}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div>
                    <img src={result.images.img2} alt="" />
                  </div>
                  <div>
                    <div>
                      <p>
                        <i className="bi bi-quote"></i>
                        {result.users.review2}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div>
                    <img src={result.images.img3} alt="" />
                  </div>
                  <div>
                    <div>
                      <p>
                        <i className="bi bi-quote"></i>
                        {result.users.review3}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            )}
          </Avatar>
        </Container>
      </Main>
    );
  };

  const MobileView = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          cursor: `url(${cursor}), auto`,
          backgroundPositionX: "40%",
          backgroundPositionY: "0%",
          height: "100vh",
        }}
        variants={mainVariants}
        initial="initial"
        animate="animated"
      >
        <Navbars />
        {result && (
          <Carousel fade>
            <Carousel.Item>
              <div>
                <img src={result.images.img1} alt="" />
              </div>
              <div>
                <div>
                  <p>
                    <i className="bi bi-quote"></i>
                    {result.users.review1}
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <img src={result.images.img2} alt="" />
              </div>
              <div>
                <div>
                  <p>
                    <i className="bi bi-quote"></i>
                    {result.users.review2}
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <img src={result.images.img3} alt="" />
              </div>
              <div>
                <div>
                  <p>
                    <i className="bi bi-quote"></i>
                    {result.users.review3}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        )}
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
