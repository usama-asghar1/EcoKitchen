import React from 'react'; 
import logo1 from "./LOGO.svg";
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import './Loginpages.css'



export default function LandingPage() {
    
return(

<div>
    <div className='logo-position-login-pages'>
    <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
    </div>
<br/>
    <div className='button-position-login-pages'>
    <Button label="Login" rounded />
<br/>

    <Button label="Signup" rounded />
<br/>
    <Button label="Forgot Password" rounded />
</div>



</div>

)};
