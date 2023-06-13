import React from "react";
import logo1 from "./LOGO.svg";
import logo2 from "./LOGO.png";
import burger from "./BURGER.svg";
import ProfilePicture from "./ProfilePicture";
import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


//added comment
function Header() {
  return (
  <div className="header-content">
  <img src={burger} alt="Burger" className="burger-image"></img>
  <img src={logo2} alt="Logo" className="logo-image"></img>
  <div className="propic-donate">
  <ProfilePicture />
  <Link to={"/donate"}><button className="donate-btn"> Donate</button></Link>
  </div>
  </div>
  );
}

export default Header;