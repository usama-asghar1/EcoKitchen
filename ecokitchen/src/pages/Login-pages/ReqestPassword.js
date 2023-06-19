import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
import { supabase } from "../../components/supabase/supabaseClient.js";

export default function RequestPassword() {
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  async function SendResetPasswordLink() {
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(
      email,
      {}
    );
    if (error === null) {
      setSentEmail(true);
      console.log(data, error);
      return;
    } else {
      setError(error.message);
      return;
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
        <div className="logo-position-login-pages">
          <img src={logo1} alt="Logo" className="logo-image-login-pages" />
        </div>
        {sentEmail === false && (
          <>
            <div className="page-text-positioning">
              <h2>
                To Reset Your Password Please Enter Your Email Below To Receive
                A Link
              </h2>
            </div>
            <br />
            <br />
            <div className="box-centering">
              <label htmlFor="Email">Email</label>
              <InputText
                value={email}
                onChange={handleEmailChange}
                id="Email"
              />
            </div>
            <br />
            <div className="button-position-login-pages">
              <Button
                onClick={SendResetPasswordLink}
                label="Send Link"
                rounded
              />
            </div>
          </>
        )}
        {error && <Message text={"Please enter a valid email address"} />}
        {sentEmail && (
          <Message
            text={"Please check your email for the reset password link"}
          />
        )}
      </div>
    </div>
  );
}
