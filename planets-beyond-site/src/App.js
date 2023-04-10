import "./App.css";
import { Homepage } from "./components/Homepage.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { ChoosePlanet } from "./components/ChoosePlanet";
import { PlanetPage } from "./components/PlanetPage";
import { Internal } from "./components/Internal";
import { Geology } from "./components/Geology";
import { useEffect, useState } from "react";
/* import { Overview } from "./components/Overview"; */
import { Reviews } from "./components/Reviews";
import { AnimatePresence } from "framer-motion";
import { PageNotFound } from "./components/PageNotFound";
import { Intro } from "./components/Intro";
import { BuyTicket } from "./components/BuyTicket";
import { SummaryPage } from "./components/SummaryPage";
import { ThankYouPage } from "./components/ThankYouPage";

function App() {
  const location = useLocation();

  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlanets = async () => {
    let response = await fetch(
      "https://planets-beyond-app.onrender.com/planets"
    );
    try {
      let data = await response.json();

      setTimeout(() => {
        setPlanets(data);
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="thank-you-page" element={<ThankYouPage />} />
        <Route
          path="/summary/:id"
          element={<SummaryPage planets={planets} />}
        />
        <Route path="/buy-ticket/:id" element={<BuyTicket />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/reviews/:id" element={<Reviews />} />
        <Route
          path="/planet/:id/internal-structure"
          element={<Internal planets={planets} />}
        />
        <Route
          path="/planet/:id/surface-geology"
          element={<Geology planets={planets} />}
        />
        <Route path="/" element={<Intro />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route
          path="/destination"
          element={<ChoosePlanet planets={planets} loading={loading} />}
        />
        <Route
          path="/planet/:id/overview"
          element={<PlanetPage planets={planets} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
