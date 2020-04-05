import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import expandCardReducer from "./expandCardReducer";

export default combineReducers({
  users: usersReducer,
  id: expandCardReducer
});
