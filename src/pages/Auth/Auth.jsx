import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resetForm = () => {
    setConfirmPass(true);
  };

  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>We Chat</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Right Side  */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Register" : "Login"}</h3>

          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {isSignup && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "8px",
            }}
          >
            *Confirm password is not same!
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "context-menu" }}
              onClick={() => {
                setIsSignup(!isSignup);
                resetForm();
              }}
            >
              {isSignup
                ? "Already have an account. Login!"
                : " Don't have an account Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignup ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
