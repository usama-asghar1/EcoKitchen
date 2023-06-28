import React from "react";
import logo1 from "./LOGO.svg";
import ProfilePicture from "./ProfilePicture";
import "./Header.css";
import { Link } from "react-router-dom";


//added comment
function Header({ title, setTitle }) {
  return (
    <div className="header-container">
      <div className="header-content">
        <div>
          <ProfilePicture />
        </div>
        <div>
          <Link to={"/Food"}>
            <img src={logo1} alt="Logo" className="logo-image" onClick={() => setTitle("Food")} />
          </Link>
        </div>
        <div className="propic-donate">
          <Link to={"/donate"}>
            <button className="donate-btn" onClick={() => setTitle("Donate")}>
              Donate
            </button>
          </Link>
        </div>
      </div>
      <div className="title-container-mobile">
        <h1 className="page-title">{title}</h1>
      </div>
    </div>
  );
}

export default Header;
