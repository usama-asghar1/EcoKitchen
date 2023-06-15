import logo1 from "./LOGO.svg";
import './Loginpages.css'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function RequestPassword() {
 
    return (
    <div>
      <div>
        <div className='logo-position-login-pages'>
          <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
        </div>
        <div className="Request-Password-page-text-positioning"> 
          <h2>To Reset Your Password Please Enter Your Email Below To Recieve A Link</h2>
        </div>
  <br/>
  <br/>
        <div className="flex flex-column gap-2">
          <label htmlFor="Email">Email</label>
            <InputText id="Email" />
        </div>
        </div>
  <br/>
        <div className='button-position-login-pages'>
          <Button label="Send Link" rounded />
        </div>
    </div>
  )};