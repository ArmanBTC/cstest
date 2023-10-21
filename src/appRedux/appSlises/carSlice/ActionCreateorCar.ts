import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetCarsAction = createAsyncThunk("", async () => {
  const response = await axios.get("https://amdprog.azurewebsites.net/api/car");
  console.log(response.data);
  return response.data;
});
