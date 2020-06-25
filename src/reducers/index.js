import { combineReducers } from "redux";
import currentUser from "./currentUser";
import counter from "./counter";

const rootReducer = combineReducers({
  currentUser,
  counter,
});

export default rootReducer;
