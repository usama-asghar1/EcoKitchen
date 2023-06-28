import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
import { supabase } from "../../components/supabase/supabaseClient.js";
import { useNavigate, Link } from "react-router-dom";

export default function RequestPassword() {
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
  };

  // Function to check if email is valid
  function isValidEmail(email) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return emailCheck; // either true or false
  }

  async function SendResetPasswordLink() {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/ResetPassword",
    });
    if (error) {
      setError("An error was encountered when resetting your password");
      return;
    } else {
      setSentEmail(true);
    }
  }

  // const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const emailSubmit = {
  //     Email: email,
  //   };

  //   console.log(emailSubmit);

  //   navigate('/ResetPassword');
  // };
  return (
    <div>
      <div>
        <div className="logo_container">
          <img src={logo1} alt="Logo" className="logo-image-login-pages" />
        </div>
        {sentEmail === false && (
          <>
            <div>
              <h2 className="login_title">
                To Reset Your Password <br /> Please Enter Your Email Below To
                Receive A Link
              </h2>
            </div>
            <br />
            
            <div className="box-centering">
              <label htmlFor="Email">Email</label>
              <InputText
                value={email}
                onChange={handleEmailChange}
                aria-label="input Email address"
                id="Email"
              />
            </div>
            
            <div className="button_container">
              <Link to="/Login">
                <div
                  className="login_btn"
                  onClick={SendResetPasswordLink}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      SendResetPasswordLink();
                    }
                  }}
                >
                  Send Link
                </div>
              </Link>
            </div>
            <div
              className="button-position-login-pages"
              aria-live="polite"
            ></div>
          </>
        )}
        {error && <Message text={"Please enter a valid email address"} />}
        {sentEmail && (
          <section aria-live="polite">
            <Message
              text={"Please check your email for the reset password link"}
              role="alert"
            />
            <Button
              onClick={() => navigate("/Login")}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  navigate("/Login");
                }
              }}
              label="Go to login page"
              rounded
              aria-label="Navigate to the login page"
            />
          </section>
        )}
      </div>
      
      <div className="button_container">
        <Link to="/">
          <div className="back_btn">Back</div>
        </Link>
      </div>
    </div>
  );
}
