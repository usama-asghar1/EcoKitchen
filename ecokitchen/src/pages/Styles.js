import { Link } from "react-router-dom";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";

function Styles() {
  <Link to={`/styles}`}></Link>;
  return (
    <div className="styles-container">
      <div className="header-container"></div>
      <div className="content-container">
        <h1 className="page-title">Your Pantry</h1>
        <div className="card flex justify-content-center">
          <Button label="Pantry" />
        </div>
        <button className="donate-btn">Donate</button>
        <input type="text" placeholder="Search" />
        <button>+</button>
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <Link to={`/`}>Home</Link>
          <Link to={`/recipes`}>Recipes</Link>
          <Link to={`/styles`}>Styles</Link>
        </nav>
      </div>
    </div>
  );
}

export default Styles;
