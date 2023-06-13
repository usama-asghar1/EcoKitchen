import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import LandingPage from "../src/pages/LandingPage";
import Styles from "./pages/Styles";
import Shopping from "./pages/Shopping";
import Food from "./pages/Food";
import Breakdown from "./pages/Breakdown";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/HomePage" element={<Home />} />

        <Route path="/Food" element={<Food />} />

        <Route path="/Breakdown" element={<Breakdown />} />        

        <Route path="Recipes" element={<Recipes />} />

        <Route path="/Shopping" element={<Shopping />} />

        <Route path="/LandingPage" element={<LandingPage />} />

        <Route path="/styles" element={<Styles />} />

      </Routes>
    </div>
  );
}

export default App;
