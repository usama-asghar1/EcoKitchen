import logo1 from "./LOGO.svg";
import "./Loginpages.css";
import React, { useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { supabase } from "../../components/supabase/supabaseClient.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // const navigate = useNavigate();

  async function signUp() {
    if (password === confirmPassword) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      toast.success("Sign up sucessfull, please check email.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(data);
      console.log(error);
      return;
    } else {
      alert("Your passwords do not match");
      return;
    }
  }
//

  return (
    <div>
    <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="landing_container">
        <div className="top-box">
          <div className="logo_container" style={{ marginTop: "90px" }}>
            <img src={logo1} alt="Logo" className="logo-image"></img>
          </div>
        </div>
      </div>
      <h2 className="login_title" style={{ marginTop: "60px" }}>
        SIGN UP
      </h2>
      <div className="box-centering">
        <label htmlFor="Email">Email</label>
        <InputText value={email} onChange={handleEmailChange} id="Email" />
      </div>
      <div className="box-centering">
        <label htmlFor="Password">Password</label>

        <Password
          id="Password2"
          value={password}
          onChange={handlePasswordChange}
          toggleMask
        />
      </div>
      <div className="box-centering">
        <label htmlFor="Confirm Password">Confirm Password</label>

        <Password
          id="ConfirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          toggleMask
        />
      </div>
      <br />
      <div className="button_container">
        {/* <Link className="link" to="/Login"> */}
          <div
            className="login_btn"
            onClick={signUp}
            style={{ marginTop: "-10px" }}
          >
            SignUp
          </div>
        {/* </Link> */}
      </div>
      <div className="button_container">
        <Link to="/">
          <div className="back_btn" style={{ marginTop: "10px" }}>
            Back
          </div>
        </Link>
      </div>
    </div>
  );
}
