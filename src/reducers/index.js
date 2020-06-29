import { combineReducers } from "redux";
import hoverCard from "./hoverCard";
import data from "./data";
import modal from "./modal";

const rootReducer = combineReducers({
  hoverCard,
  data,
  modal,
});

export default rootReducer;
