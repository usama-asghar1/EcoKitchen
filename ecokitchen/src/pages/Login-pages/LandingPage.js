import React from 'react'; 
import logo1 from "./LOGO.svg";
import { Button } from 'primereact/button';
import './theme.css';
import './Loginpages.css';



export default function LandingPage() {
    
return(

<div>
    <div className='logo-position-login-pages'>
    <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
    </div>
<br/>
    <div className='button-position-login-pages'>
<br/>
    <Button label="Login" severity="success" rounded />
<br/>
    <Button label="Sign Up" severity="secondary" rounded />
<br/>
    <Button label="Forgotten Password" severity="warning" rounded />
<br/>
    
</div>



</div>

)};
