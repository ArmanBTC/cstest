import React, { useState } from "react";
//import { Api } from "../../api/Api";
import { Link } from "react-router-dom";
import bmwBackground from "../../icons/bmwicon.jpg";
import { useAppDispatch } from "../../appRedux/store";
import {
  ISignInParametrs,
  SignInUserAsync,
} from "../../appRedux/appSlises/userSlice/ActionCreateorUser";
import { useNavigate } from "react-router-dom";
import FacebookGoogleAppleAuth from "./components/FacebookGoogleAppleAuth";

const Signin = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  async function SigninAsync(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body: ISignInParametrs = {
      username: email,
      password: password,
      rememberMe: true,
    };
    dispatch(SignInUserAsync(body))
      .unwrap()
      .then(() => navigate("/"));
  }

  return (
    <div className="container">
      <div
        className="signup"
        style={{
          backgroundImage: `url(${bmwBackground})`,
          backgroundSize: "contain",
          justifyContent: "flex-start",
        }}
      >
        <div className="form-container" style={{ marginLeft: 150 }}>
          <p className="title">Welcome OTOBIL</p>
          <form className="form" onSubmit={SigninAsync}>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn">Log in</button>
          </form>
          <p className="sign-up-label">
            Don't have an account?
            <Link className="sign-up-link" to={"/signup"}>
              Sign up
            </Link>
          </p>
          <FacebookGoogleAppleAuth />
        </div>
      </div>
    </div>
  );
};

export default Signin;
