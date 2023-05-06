import { combineReducers } from "redux";
import userReducerSlice from "./users/redux/reducer";

const rootReducers = combineReducers({
  users: userReducerSlice,
});

export default rootReducers;
