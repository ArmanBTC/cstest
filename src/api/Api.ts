import axios from "axios";
import { ICreateAccount } from "../Layout/pages/Signup";

export class Api {
  static async CreateAccountAsync(body: ICreateAccount) {
    const response = await axios.post(
      "https://hayt.am:8443/api/register",
      body
    );
    return response.data;
  }
}
