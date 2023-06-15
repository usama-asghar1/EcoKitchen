import logo1 from "./LOGO.svg";
import './Loginpages.css';
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginSubmit = {
      Username: username,
      Email: email,
      Password: password,
      ConfirmedPassword: confirmPassword
    };

    console.log(loginSubmit);

    navigate('/Login');
  };

  return (
    <div>
      <div className='logo-position-login-pages'>
        <img src={logo1} alt="Logo" className="logo-image-login-pages" />
      </div>
      <div className="flex flex-column gap-2">
        <label htmlFor="username">Username</label>
        <InputText value={username} onChange={handleUsernameChange} id="username" aria-describedby="username-help" />
      </div>
      <div className="flex flex-column gap-2">
        <label htmlFor="Email">Email</label>
        <InputText value={email} onChange={handleEmailChange} id="Email" />
      </div>
      <div className="card flex justify-content-center">
        <label htmlFor="Password">Password</label>
        <Password value={password} onChange={handlePasswordChange} toggleMask />
      </div>
      <div className="card flex justify-content-center">
        <label htmlFor="Confirm Password">Confirm Password</label>
        <Password value={confirmPassword} onChange={handleConfirmPasswordChange} toggleMask />
      </div>
      <Link className="link" to="/Login">
        <div className='button-position-login-pages'>
          <Button onClick={handleSubmit} label="Sign Up" rounded />
        </div>
      </Link>
    </div>
  );
}