import store from "./redux/redux-store";
import {
  toggleNavBarMobileStatusActionCreator,
  removeNavBarMobileStatusActionCreator,
} from "./redux/reducers/navBarReducer";
import { getMobileStatus } from "./redux/selectors/navBarSelector";

const minimalDesktopWidth = 850;

function media() {
  if (
    window.innerWidth <= minimalDesktopWidth &&
    !getMobileStatus(store.getState())
  ) {
    store.dispatch(toggleNavBarMobileStatusActionCreator());
  } else if (
    window.innerWidth > minimalDesktopWidth &&
    getMobileStatus(store.getState())
  ) {
    store.dispatch(removeNavBarMobileStatusActionCreator());
  }
}
export default media;
