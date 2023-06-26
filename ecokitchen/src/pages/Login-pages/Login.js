import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./theme.css";
import { Link } from "react-router-dom";
import { Message } from "primereact/message";
// We import our supabase client from the supabase folder to use it hello
import { supabase } from "../../components/supabase/supabaseClient.js";

export default function Login({ setIsAuthenticated }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // Handle the response
    if (error) {
      console.error("Error logging in:", error.message);
      setError(error.message);
    } else {
      console.log("User logged in");
      navigate("/HomePage", { replace: true });
      setIsAuthenticated(true);
      // Redirect user to the homepage after successful login
    }
  }

  return (
    <div>
      <div className="logo-position-login-pages">
        <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
      </div>
      <h2 className="page-text-positioning"> LOGIN </h2>
      <div className="box-centering">
        <label htmlFor="username">Email</label>
        <InputText
          value={email}
          onChange={handleUsernameChange}
          id="Email"
          aria-describedby="Email-help"
        />
        <div className="box-centering">
          <label htmlFor="Password">Password</label>
          <Password
            value={password}
            onChange={handlePasswordChange}
            toggleMask
          />
          {error && <Message severity="error" text={error} />}
        </div>
        <div>
          <Link className="link" to="/RequestPassword">
            <p> forgotten password?</p>
          </Link>
        </div>
      </div>
      <br />
      <div className="button-position-login-pages">
        <Button label="Login" onClick={signInWithEmail} rounded />
      </div>
    </div>
  );
}
