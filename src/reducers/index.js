import { combineReducers } from "redux";
import currentUser from "./currentUser";
import counter from "./counter";
import hoverCard from "./hoverCard";
import data from "./data";

const rootReducer = combineReducers({
  currentUser,
  counter,
  hoverCard,
  data,
});

export default rootReducer;
