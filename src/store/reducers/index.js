import { combineReducers } from "redux";
import authentication from "./authenticate";
import view from "./view";
import voucher from "./voucher";

export default combineReducers(authentication, view, voucher);