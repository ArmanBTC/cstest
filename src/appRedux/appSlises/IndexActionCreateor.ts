import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetIndexData = createAsyncThunk("/GetIndexData", async () => {
  const response = await axios.get(
    "https://amdprog.azurewebsites.net/api/amd/getname"
  );
  return response.data;
});
