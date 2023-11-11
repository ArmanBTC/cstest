import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IUser } from "./UserSlice";



export const GetUserAsync = createAsyncThunk(
  "getUser",
  async (_, funcProps) => {
    try {
      const responseUser = await axios.get<IUser>("");
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
  email: string;
  password: string;
  rememberMe: true;
}
export const SignInUserAsync = createAsyncThunk(
  "getUser",
  async (signupUserData: ISignInParametrs, funcProps) => {
    const signupResponse = await axios.post("", signupUserData);

    if (signupResponse.status === 200) {
      console.log(signupResponse.data);
      //const result = await funcProps.dispatch(GetUserAsync());
    }
   
    console.log("Mtav Sign IN");
  }
);

//const Dilay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
