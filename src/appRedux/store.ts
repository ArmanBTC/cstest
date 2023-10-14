import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { IndexPageReducer } from "./appSlises/IndexPageSlise";

const rootReducers = combineReducers({
  indexPageReducer: IndexPageReducer,
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