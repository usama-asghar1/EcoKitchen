import logo1 from "./LOGO.svg";
import './Loginpages.css'
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Link, useNavigate } from "react-router-dom";

export default function RequestPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailSubmit = {
      Email: email,
    };

    console.log(emailSubmit);

    navigate('/ResetPassword');
  };
    return (
    <div>
      <div>
        <div className='logo-position-login-pages'>
          <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
        </div>
        <div className="page-text-positioning"> 
          <h2>To Reset Your Password Please Enter Your Email Below To Recieve A Link</h2>
        </div>
  <br/>
  <br/>
        <div className="box-centering">
          <label htmlFor="Email">Email</label>
          <InputText value={email} onChange={handleEmailChange} id="Email" />
        </div>
        </div>
  <br/>
  <Link className="link" to="/ResetPassword">
        <div className='button-position-login-pages'>
          <Button onClick={handleSubmit} label="Send Link" rounded />
        </div>
        </Link>
    </div>
  )};