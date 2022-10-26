import addmenuReducer from "./addmenu";
import connectReducer from "./connect"
import contractReducer from "./connect";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    open : addmenuReducer,
    contract : connectReducer
})