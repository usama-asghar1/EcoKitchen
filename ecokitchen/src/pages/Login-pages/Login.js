import logo1 from "./LOGO.svg";
import './Loginpages.css'
import { Button } from 'primereact/button';
import './theme.css'

export default function Login() {
 
    return (
      <div>
      <div className='logo-position-login-pages'>
      <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
      </div>
  <br/>
      <div className='button-position-login-pages'>
      <Button label="Login" severity="success" rounded />
  
  </div>
  
  
  
  </div>
  
  )};