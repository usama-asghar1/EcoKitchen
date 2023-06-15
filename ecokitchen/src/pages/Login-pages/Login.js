import logo1 from "./LOGO.svg";
import './Loginpages.css'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import './theme.css'

export default function Login() {
 
    return (
      <div>
      <div className='logo-position-login-pages'>
      <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
      </div>
      <div className="card flex justify-content-center">
           
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
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