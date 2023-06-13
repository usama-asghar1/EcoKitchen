import React from "react";
import logo1 from "./LOGO.svg";
import ProfilePicture from "./ProfilePicture";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-content">
      <ProfilePicture />
      <Link to={"/"}>
        <img src={logo1} alt="Logo" className="logo-image"></img>
      </Link>
      <div className="propic-donate">
        <Link to={"/donate"}>
          <button className="donate-btn"> Donate</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
