import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Donate from "./pages/Donate";

import LandingPage from "../src/pages/LandingPage";

import Styles from "./pages/Styles";
import Additem from "./pages/AdditemPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/LandingPage" element={<LandingPage />} />

        <Route path="/styles" element={<Styles />} />

        <Route path="/additem" element={<Additem />} />
      </Routes>
    </div>
  );
}

export default App;
