import React, { useState } from "react";
//import { Api } from "../../api/Api";
import { useRequestWithLoader_AMD } from "../../hooks/Hooks";
import FacebookGoogleAppleAuth from "./components/FacebookGoogleAppleAuth";
import Madal from "../../components/Madal";
//import ReactDOM from "react-dom/client";

export interface ICreateAccount {
  email: string;
  password: string;
  full_name: string;
}

const Signup = () => {
  const { statusCod, InvokeSendRequest } = useRequestWithLoader_AMD();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function CreateAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body: ICreateAccount = {
      full_name: userName,
      email: email,
      password: password,
    };
    console.log(body);
    const status = await InvokeSendRequest(
      "post",
      "https://hayt.am:8443/api/register",
      body
    );
    if (status === 201) {
      setEmail("");
      setPassword("");
      setUserName("");
    }
    //const response = await Api.CreateAccountAsync(body);
    // console.log(response);
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(/icons/registrBackground.jpg)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "start",
      }}
    >
      {statusCod ? (
        <Madal
          message="Go to your email and click for activet your email"
          statusCod={statusCod}
        />
      ) : (
        <></>
      )}

      <div className="signup">
        <div className="form-container">
          <p className="title">Create account</p>

          <form className="form" onSubmit={CreateAccount}>
            <input
              type="text"
              required
              className="input"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              required
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-btn">Create account</button>
          </form>
          <p className="sign-up-label">
            Already have an account?<span className="sign-up-link">Log in</span>
          </p>
          <FacebookGoogleAppleAuth />
        </div>
      </div>
    </div>
  );
};

export default Signup;
