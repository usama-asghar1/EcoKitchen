import React from "react";
import logo1 from "./LOGO.svg";
import ProfilePicture from "./ProfilePicture";
import "./Header.css";
import { Link } from "react-router-dom";

//added comment
function Header() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "10vh",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "center",
      }}
    >
      <div className="center">
        <ProfilePicture />
      </div>
      <div className="center">
        <Link to={"/"}>
          <img src={logo1} alt="Logo" className="logo-image"></img>
        </Link>
      </div>
      <div>
        <div className="propic-donate">
          <Link to={"/donate"}>
            <button className="donate-btn"> Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
