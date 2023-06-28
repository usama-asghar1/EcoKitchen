import React from "react";
import logo1 from "./LOGO.svg";

import "./theme.css";
import "./Loginpages.css";
import { Link } from "react-router-dom";

import "../../App.css";

export default function LandingPage() {
  return (
    <div className="landing_container">
      <div className="top-box">
        <div className="logo_container">
          <img src={logo1} alt="Logo" className="logo-image"></img>
        </div>
      </div>
      <h2 className="welcome_title">WELCOME TO ECO KITCHEN </h2>

      <h3 className="welcome_info">
        This app is desgined to help Reduce waste, Cut cost and Find new
        recipies
      </h3>

      <div className="button_container">
        <Link className="link" to="/Login">
          <div className="login_btn">Login</div>
        </Link>
        <br />
        <Link className="link" to="/SignUp">
          <div className="signup_btn">Sign&nbsp;Up </div>
        </Link>
      </div>
    </div>
  );
}
