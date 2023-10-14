import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetIndexData } from "./IndexActionCreateor";

interface IndexPageSliseType {
  test: null | string;
}

const initialState: IndexPageSliseType = {
  test: null,
};

const IndexPageSlice = createSlice({
  name: "index/page",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      GetIndexData.fulfilled.type,
      (state, action: PayloadAction<string>) => {
        state.test = action.payload;
      }
    );
  },
});

export const IndexPageReducer = IndexPageSlice.reducer;
