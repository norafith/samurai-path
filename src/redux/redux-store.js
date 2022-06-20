import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navBarReducer } from "./navBarReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

let reducers = combineReducers({
  profile: profileReducer,
  navBar: navBarReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;

window.reduxStore = store;
