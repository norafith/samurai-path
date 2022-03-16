import store from "./redux/redux-store";
import { toggleNavBarMobileStatusActionCreator, removeNavBarMobileStatusActionCreator } from "./redux/navBarReducer";

function media() {
  if (window.innerWidth <= 85+0) {
    store.dispatch(toggleNavBarMobileStatusActionCreator());
  } else {
    store.dispatch(removeNavBarMobileStatusActionCreator());
  }
}

export default media;