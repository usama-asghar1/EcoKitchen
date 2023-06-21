import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import React, { useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../components/supabase/supabaseClient.js";

export default function SignUp() {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate();

  async function signUp() {
    if (password === confirmPassword) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      navigate("/Login");
      console.log(data);
      console.log(error);
      return;
    } else {
      alert("Your passwords do not match");
      return;
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const loginSubmit = {
  //     Username: username,
  //     Email: email,
  //     Password: password,
  //     ConfirmedPassword: confirmPassword,
  //   };

  //   console.log(loginSubmit);
  // };

  return (
    <div>
      <div className="logo-position-login-pages">
        <img src={logo1} alt="Logo" className="logo-image-login-pages" />
      </div>
      <h2 className="page-text-positioning">SIGN UP</h2>
      {/* <div className="box-centering">
        <label htmlFor="username">Username</label>
        <InputText
          value={username}
          onChange={handleUsernameChange}
          id="username"
          aria-describedby="username-help"
        />
      </div> */}
      <div className="box-centering">
        <label htmlFor="Email">Email</label>
        <InputText value={email} onChange={handleEmailChange} id="Email" />
      </div>
      <div className="box-centering">
        <label htmlFor="Password">Password</label>
        <Password value={password} onChange={handlePasswordChange} toggleMask />
      </div>
      <div className="box-centering">
        <label htmlFor="Confirm Password">Confirm Password</label>
        <Password
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          toggleMask
        />
      </div>
      <br />

      <div className="button-position-login-pages">
        <Button onClick={signUp} label="Sign Up" rounded />
      </div>
    </div>
  );
}
