import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetUserAsync } from "./ActionCreateorUser";

export interface IUser {
  business?: false;
  email?: string | null;
  fullName?: string | null;
  id?: number;
  imageUrl?: null;
  lang?: string | null;
  role?: string | null;
}
interface IUserInitialState {
  user: IUser | null;
  isAuthorized: boolean;
}

const initialState: IUserInitialState = {
  user: null,
  isAuthorized: false,
};

const UserSilce = createSlice({
  name: "/userslice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      GetUserAsync.fulfilled.type,
      (state, action: PayloadAction<IUser>) => {
        console.log("SLICE USER fulfilled");
        console.log(action.payload);
        state.user = action.payload;
        state.isAuthorized = true;
      }
    );
    builder.addCase(GetUserAsync.rejected.type, (state, action) => {
      console.log("SLICE USER Mtav GetUserAsync.rejected.type");
    });

    builder.addCase("signout", (state) => {
      console.log("MTAV SIGN OUT SLICE");
      state.user = null;
      state.isAuthorized = false;
    });
  },
});

export const userReducer = UserSilce.reducer;
