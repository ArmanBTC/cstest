import axios from "axios";
import { ICreateAccount } from "../Layout/pages/Signup";
import { ISignIn } from "../Layout/pages/Signin";

export class Api {
  static async CreateAccountAsync(body: ICreateAccount) {
    const response = await axios.post("http://hayt.am:8080/api/register", body);
    return response.data;
  }

  static async SigninAsync(body: ISignIn) {
    const response = await axios.post("http://hayt.am:8080/api/auth", body);
    return response.data;
  }
}
