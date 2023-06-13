import { Link } from "react-router-dom";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";
import Header from "../components/header/Header";

function Additem() {
  <Link to={`/styles}`}></Link>;
  return (
    <div className="styles-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="content-container">
        <h1 className="page-title">Add Item</h1>
        <div className="card flex justify-content-center">
          <Button label="Pantry" />
        </div>
        <button className="donate-btn">Donate</button>
        <input type="text" placeholder="Search" />
        <button>+</button>
        this is our page
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

export default Additem;
