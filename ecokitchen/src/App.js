import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

import LandingPage from "../src/pages/LandingPage";

import Styles from "./pages/Styles";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/HomePage" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />

        <Route path="/LandingPage" element={<LandingPage />} />

        <Route path="/styles" element={<Styles />} />

      </Routes>
    </div>
  );
}

export default App;
