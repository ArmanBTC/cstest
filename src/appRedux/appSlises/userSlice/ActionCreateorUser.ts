import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IUser } from "./UserSlice";

export const GetUserAsync = createAsyncThunk(
  "getUser",
  async (_, funcProps) => {
    const authToken = localStorage.getItem("token");
    try {
      const responseUser = await axios.get<IUser>(
        "https://hayt.am:8443/api/user",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return funcProps.fulfillWithValue(responseUser.data);
    } catch (ex) {
      const error = ex as AxiosError;
      if (error !== null) {
        console.log("AMD_PRINT  :" + error.message);
      }
    }
  }
);

export interface ISignInParametrs {
  username: string; //Email
  password: string;
  rememberMe: true;
}
export const SignInUserAsync = createAsyncThunk(
  "getUser",
  async (signupUserData: ISignInParametrs, funcProps) => {
    const signupResponse = await axios.post(
      "https://hayt.am:8443/api/auth",
      signupUserData
    );
    if (signupResponse.status === 200) {
      localStorage.setItem("token", signupResponse.data.id_token);
      funcProps.dispatch(GetUserAsync());
    } else {
      alert("Login or Password is not corect");
    }
  }
);
