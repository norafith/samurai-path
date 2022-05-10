import store from "./redux/redux-store";
import { toggleNavBarMobileStatusActionCreator, removeNavBarMobileStatusActionCreator } from "./redux/navBarReducer";

function media() {
  if (window.innerWidth <= 850) {
    store.dispatch(toggleNavBarMobileStatusActionCreator());
  } else {
    store.dispatch(removeNavBarMobileStatusActionCreator());
  }
}

export default media;