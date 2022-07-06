import { createStore, combineReducers, applyMiddleware } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navBarReducer } from "./navBarReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import { appReducer } from "./appReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profile: profileReducer,
  navBar: navBarReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.reduxStore = store;
