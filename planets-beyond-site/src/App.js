import "./App.css";
import { Homepage } from "./components/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChoosePlanet } from "./components/ChoosePlanet";
import { PlanetPage } from "./components/PlanetPage";
import { Internal } from "./components/Internal";
import { Geology } from "./components/Geology";
import { useEffect, useState } from "react";
import { Overview } from "./components/Overview";
import { Reviews } from "./components/Reviews";

function App() {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    let response = await fetch("http://localhost:8000/planets/");
    try {
      let data = await response.json();
      console.log("DATA", data);
      setPlanets(data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reviews/:id" element={<Reviews />} />
        <Route
          path="/overview/:id/overview"
          element={<Overview planets={planets} />}
        />
        <Route
          path="/planet/:id/internal-structure"
          element={<Internal planets={planets} />}
        />
        <Route
          path="/planet/:id/surface-geology"
          element={<Geology planets={planets} />}
        />
        <Route path="/" element={<Homepage />} />
        <Route
          path="/destination"
          element={<ChoosePlanet planets={planets} />}
        />
        <Route
          path="/planet/:id/overview"
          element={<PlanetPage planets={planets} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
