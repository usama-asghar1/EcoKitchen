import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Donate from "./pages/Donate";

import LandingPage from "../src/pages/LandingPage";

import Styles from "./pages/Styles";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/LandingPage" element={<LandingPage />} />

        <Route path="/styles" element={<Styles />} />
      </Routes>
    </div>
  );
}

export default App;
