// import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Navbar from "./components/Navbar";
import AddItemButton from "./components/AddItemButton";
import LandingPage from "./pages/Login-pages/LandingPage";
import Login from "./pages/Login-pages/Login";
import SignUp from "./pages/Login-pages/Signup";
import ResetPassword from "./pages/Login-pages/ResetPassword";
import RequestPassword from "./pages/Login-pages/ReqestPassword";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Breakdown from "./pages/Breakdown";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Shopping from "./pages/Shopping";
import Donate from "./pages/Donate";
import Additem from "./pages/AdditemPage";
import Styles from "./pages/Styles";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "10vh 70vh 10vh",
          // gridTemplateColumns: "(3, 1fr), ",
        }}
      >
        <div
          style={{
            gridRow: "1",
          }}
        >
          {isAuthenticated && (
            <header>
              <Header />
            </header>
          )}
        </div>
        <div
          style={{
            gridRow: "2",
          }}
        >
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/Login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route path="/RequestPassword" element={<RequestPassword />} />

              {isAuthenticated && (
                <>
                  <Route path="/HomePage" element={<Home />} />
                  <Route path="/Food" element={<Food />} />
                  <Route path="/Breakdown" element={<Breakdown />} />
                  <Route path="/Recipes" element={<Recipes />} />
                  <Route
                    path="/Recipes/:recipeIdMeal"
                    element={<RecipeDetail />}
                  />
                  <Route path="/Shopping" element={<Shopping />} />
                  <Route path="/Donate" element={<Donate />} />
                  <Route path="/additem" element={<Additem />} />
                  <Route path="/Styles" element={<Styles />} />
                </>
              )}
            </Routes>
          </main>
        </div>
        <div
          style={{
            gridRow: "3",
            
          }}
        >
          {isAuthenticated && (
            <div>
              <AddItemButton />
              <Navbar />
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
