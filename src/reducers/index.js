import { combineReducers } from "redux";
import Add from "./userReducer";
import editReducer from "./editReducer";
import { addNewUser, updateButton, disableButton } from "./addContact";
const rootReducer = combineReducers({
  Add,
  editReducer,
  addNewUser,
  updateButton,
  disableButton,
});
export default rootReducer;
