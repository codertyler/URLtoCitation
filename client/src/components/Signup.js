import React from "react";
import "./Signup.css"

export default function Signup() {
  return (
    <div>
      <div id="login-box">
        <form action="/signup" method="POST" className="left">
          <h1>Sign up</h1>

          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Re-type password"
          />

          <input type="submit" name="signup_submit" value="Sign me up" />
        </form>

        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </div>
  );
}
