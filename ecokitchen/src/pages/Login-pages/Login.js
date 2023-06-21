import React, { useState } from "react";
import logo1 from "./LOGO.svg";
import './Loginpages.css'
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './theme.css'
import { Link } from "react-router-dom";

export default function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const loginSubmit = {
          Username: username,
          Password: password
        };
        
        console.log(loginSubmit);
      };
     
    return (
      <div>
      <div className='logo-position-login-pages'>
      <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
      </div>
      <h2 className="page-text-positioning"> LOGIN </h2>
      <div className="box-centering">
           
                <label htmlFor="username">Username</label>
            <InputText value={username} onChange={handleUsernameChange} id="username" aria-describedby="username-help" />
        <div className="box-centering">
                <label htmlFor="Password">Password</label>
            <Password value={password} onChange={handlePasswordChange} toggleMask />
        </div>
        <div>
        <Link className="link" to="/RequestPassword">
          <p> forgotten password?</p>
        </Link>
        </div>  
        </div>
  <br/>
      <div className='button-position-login-pages'>
      <Button label="Login" onClick={handleSubmit} rounded />
  
  </div>
  
  
  
  </div>
  
  )};