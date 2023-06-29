import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import { Password } from "primereact/password";
import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../components/supabase/supabaseClient.js";
import { Message } from "primereact/message";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handlenewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate();

  async function handleSubmit() {
   
    if (newPassword === confirmPassword) {
      const { user, error } = await supabase.auth.updateUser({
        password: confirmPassword,
      });
      console.log(user, error);

      navigate("/Login");
    } else {
      setError("Passwords Don't Match");
      console.error("Error logging in:", "Passwords Don't Match");
    }
  }

  return (
    <div>
      <div className="landing_container">
        <div className="top-box">
          <div className="logo_container" style={{ marginTop: "90px" }}>
            <img src={logo1} alt="Logo" className="logo-image"></img>
          </div>
        </div>
        <h2 className="login_title" style={{ marginTop: "60px" }}>
          RESET PASSWORD
        </h2>
        <div className="box-centering">
          <label htmlFor="New Password">New Password</label>

          <Password
            id="Password2"
            value={newPassword}
            onChange={handlenewPasswordChange}
            toggleMask
          />
        </div>
        <div className="box-centering">
          <label htmlFor="Confirm Password">Confirm Password</label>

          <Password
            id="ConfirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            toggleMask
          />
          {error && <Message severity="error" text={error} />}
        </div>
        <br />
        <div className="button_container">
          <Link className="link" to="/Login">
            <div className="login_btn" onClick={handleSubmit}>
              Reset
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
