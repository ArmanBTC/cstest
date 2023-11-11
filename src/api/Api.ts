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
  static async ActivetUserAsync(key: any) {
    const response = await axios.get(
      `https://hayt.am:8443/api/account/activate?key${key}`
    );
    return response;
  }
}
//http://127.0.0.1:8080/account/activate?key=MxdIf1er3EObR3uPa5m6DEPQmz8mzpE5
