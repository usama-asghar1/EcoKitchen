import React, { useState } from "react";
import logo1 from "./LOGO.svg";
import './Loginpages.css'
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './theme.css'
// import LoginButton from "../../components/LoginButtonComponent";

export default function Login() {
  const [value, setValue] = useState('');


    return (
      <div>
      <div className='logo-position-login-pages'>
      <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
      </div>
      <div className="card flex justify-content-center">
           
                <label htmlFor="username">Username</label>
            <InputText id="username" aria-describedby="username-help" />
        <div className="card flex justify-content-center">
                <label htmlFor="Password">Password</label>
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>
                {/* <small id="username-help">
                    Enter your username.
                </small> */}
            
        </div>
  <br/>
      <div className='button-position-login-pages'>
      <Button label="Login" rounded />
  
  </div>
  
  
  
  </div>
  
  )};