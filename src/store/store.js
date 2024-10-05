import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer/reducer";
import { auth } from "./reducer/auth";

export const store = createStore(combineReducers({
  todo: reducer,
  auth: auth
}))