import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navBarReducer } from "./navBarReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";

let reducers = combineReducers({
  profile: profileReducer,
  navBar: navBarReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;

window.reduxStore = store;
