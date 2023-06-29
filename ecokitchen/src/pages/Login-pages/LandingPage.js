import React from "react";
import logo1 from "./LOGO.svg";


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
      <h2 className="welcome_title" style={{ marginTop: "150px" }}>
        WELCOME TO ECO KITCHEN{" "}
      </h2>

      <h3 className="welcome_info">
        Effortless Food Management: <br />
        Minimize Waste, Maximize Taste
      </h3>

      <div className="button_container">
        <Link className="link" to="/Login">
          <div className="login_btn" style={{ marginTop: "20px" }}>
            Login
          </div>
        </Link>
        <br />

        <div className="signUp-Container">
          {/* <p className="question">Don't have an account?</p> */}
          <Link className="linktag" to="/SignUp">
            <div className="signup">Sign&nbsp;Up </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
