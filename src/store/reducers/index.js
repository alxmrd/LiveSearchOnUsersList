import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import expandCardReducer from "./expandCardReducer";
import searchInputReducer from "./searchInputReducer";

export default combineReducers({
  users: usersReducer,
  id: expandCardReducer,
  searchInput: searchInputReducer
});
