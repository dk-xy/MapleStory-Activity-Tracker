import characterReducer from "../reducers/character";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ Legion: characterReducer });

export default rootReducers;