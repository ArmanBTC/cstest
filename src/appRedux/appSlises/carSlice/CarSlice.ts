import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICar } from "../../../models/ICar";
import { GetCarsAction } from "./ActionCreateorCar";

interface initialStateType {
  cars: ICar[] | null;
}

const initialState: initialStateType = {
  cars: null,
};

export const CarSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      GetCarsAction.fulfilled.type,
      (stete, action: PayloadAction<ICar[]>) => {
        stete.cars = action.payload;
      }
    );
  },
});

export const CarReducer = CarSlice.reducer;
