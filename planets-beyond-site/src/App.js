
import './App.css';
import { Homepage } from "./components/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChoosePlanet } from './components/ChoosePlanet';
import { PlanetPage } from './components/PlanetPage';
import {Overview} from './components/Overview';
import {Internal} from './components/Internal';
import {Geology} from './components/Geology';


function App() {
  return (
<BrowserRouter>

 <Routes>
   <Route path="/planet/overview" element={<Overview/>}/>
   <Route path="/planet/internal-structure" element={<Internal/>}/>
   <Route path="/planet/surface-geology" element={<Geology/>}/>
   <Route path="/" element={<Homepage/>} />
   <Route path="/destination" element={<ChoosePlanet/>} />
   <Route path="/planet/:id" element ={<PlanetPage/>} />
 </Routes>
</BrowserRouter>
  )
}

export default App;
