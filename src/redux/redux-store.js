import { createStore, combineReducers, applyMiddleware } from "redux";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { navBarReducer } from "./reducers/navBarReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";
import { appReducer } from "./reducers/appReducer";
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
