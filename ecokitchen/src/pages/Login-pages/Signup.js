import logo1 from "./LOGO.svg";
import './Loginpages.css'
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import {Link} from "react-router-dom"

export default function SignUp() {
  const [value, setValue] = useState('');
  const [confirmPassword, setConfimPassword] = useState('');
    return (
      <div>
      <div className='logo-position-login-pages'>
      <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
      </div>
      <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
        </div>
        <div className="flex flex-column gap-2">
                <label htmlFor="Email">Email</label>
                <InputText id="Email" />
        </div>
      <div className="card flex justify-content-center">
      <label htmlFor="Password">Password</label>
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>
        <div className="card flex justify-content-center">
        <label htmlFor="Confirm Password"> Confim Password</label>
            <Password confirmPassword={confirmPassword} onChange={(e) => setConfimPassword(e.target.confirmPassword)} toggleMask />
        </div>
        <Link className="link" to="/Login">
        <div className='button-position-login-pages'>
      <Button label="Sign Up" rounded />
      </div>
      </Link>

      </div>
    
  )};