import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import { Password } from "primereact/password";
import React, { useState } from "react";
import { Button } from "primereact/button";

export default function ResetPassword() {
  const [value, setValue] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");
  return (
    <div>
      {" "}
      <div>
        <div className="logo-position-login-pages">
          <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
          <h2> RESET PASSWORD </h2>
          <div className="card flex justify-content-center">
            <p> New Password </p>
            <div className="card flex justify-content-center">
              <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                toggleMask
              />
            </div>
            <p> Confirm New Password </p>
            <div className="card flex justify-content-center">
              <Password
                confirmPassword={confirmPassword}
                onChange={(e) => setConfimPassword(e.target.confirmPassword)}
                toggleMask
              />
            </div>
            <div className="button-position-login-pages">
              <Button label="Login" rounded />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
