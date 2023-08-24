import { combineReducers } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import formReducer from "./formSlice";
import { RootState } from "../types";

const rootReducer = combineReducers({
  form: formReducer,
});
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export default rootReducer;
