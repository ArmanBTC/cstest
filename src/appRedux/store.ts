import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { IndexPageReducer } from "./appSlises/IndexPageSlise";
import { CarReducer } from "./appSlises/carSlice/CarSlice";
import { userReducer } from "./appSlises/userSlice/UserSlice";

const rootReducers = combineReducers({
  indexPageReducer: IndexPageReducer,
  CarReducerRoot: CarReducer,
  user: userReducer,
});

export const GetStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

type AppReducer = ReturnType<typeof rootReducers>;
type AppStore = ReturnType<typeof GetStore>;
type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppReducer> = useSelector;
