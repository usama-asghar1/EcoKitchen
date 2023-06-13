import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import LandingPage from "../src/pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
