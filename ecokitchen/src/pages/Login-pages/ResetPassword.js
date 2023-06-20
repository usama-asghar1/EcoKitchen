import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import { Password } from "primereact/password";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlenewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPasswordSubmit = {
      Password: newPassword,
      ConfirmedPassword: confirmPassword
    };

    console.log(newPasswordSubmit);

    if(newPassword === confirmPassword){
      navigate('/Login');
    } else {
      alert('try again')
    }
  };
  return (
    <div> 
      <div>
        <div className="logo-position-login-pages">
          <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
          </div>
          <h2 className="page-text-positioning"> RESET PASSWORD </h2>
          <div className="box-centering">
            <p> New Password </p>
            <div className="box-centering">
            <Password value={newPassword} onChange={handlenewPasswordChange} toggleMask />
            </div>
            <p> Confirm New Password </p>
            <div className="box-centering">
              <Password value={confirmPassword} onChange={handleConfirmPasswordChange} toggleMask />
            </div>
            <br/>
            <Link className="link" to="/Login">
            <div className="button-position-login-pages">
              <Button onClick={handleSubmit} label="Login" rounded />
            </div>
            </Link>
          </div>
        
      </div>
    </div>
  );
}
