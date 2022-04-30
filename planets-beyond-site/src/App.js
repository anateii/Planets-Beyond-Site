
import './App.css';
import { Homepage } from "./components/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChoosePlanet } from './components/ChoosePlanet';
import { PlanetPage } from './components/PlanetPage';


function App() {
  return (
<BrowserRouter>
 <Routes>
   <Route path="/" element={<Homepage/>} />
   <Route path="/destination" element={<ChoosePlanet/>} />
   <Route path="/planet" element ={<PlanetPage/>} />
 </Routes>
</BrowserRouter>
  )
}

export default App;
