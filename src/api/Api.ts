import axios from "axios";
import { ICreateAccount } from "../Layout/pages/Signup";

export class Api {
  static async CreateAccount(body: ICreateAccount) {
    const response = await axios.post("http://hayt.am:8080/api/register", body);
    return response.data;
  }
}
