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
    // const newPasswordSubmit = {
    //   Password: newPassword,
    //   ConfirmedPassword: confirmPassword
    // };

    // console.log(newPasswordSubmit);

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
      <div>
        <div className="logo_container">
          <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
        </div>
        <h2 className="login_title"> RESET PASSWORD </h2>
        <div className="box-centering">
          <p> New Password </p>
          <div className="box-centering">
            <Password
              value={newPassword}
              onChange={handlenewPasswordChange}
              toggleMask
            />
          </div>
          <p> Confirm New Password </p>
          <div className="box-centering">
            <Password
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
    </div>
  );
}
