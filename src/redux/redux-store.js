import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navBarReducer } from "./navBarReducer";
import { profileReducer } from "./profileReducer";
import { friendsReducer } from "./friendsReducer";



let reducers = combineReducers({
	profile: profileReducer,
	navBar: navBarReducer,
	dialogs: dialogsReducer,
	friends: friendsReducer,
})

let store = createStore(reducers);

export default store;

window.reduxStore = store;