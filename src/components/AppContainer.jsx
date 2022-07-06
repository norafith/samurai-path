import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { initializeAppThunkCreator as initializeApp } from "../redux/appReducer";
import {
  getMobileStatus,
  getNavbarOpenedStatus,
} from "../redux/selectors/navBarSelector";
import { getCurrUserData } from "../redux/selectors/authSelector";
import { getAppInitializedStatus } from "../redux/selectors/appSelector";
import Preloader from "./common/Preloader/Preloader";

class AppApiContainer extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    debugger;
    if (!this.props.isAppInitialized) return <Preloader />;
    return <App {...this.props} />;
  }
}

// function mapStateToProps(state) {
//   return {
//     mobileStatus: state.navBar.mobileStatus,
//     navBarOpenedStatus: state.navBar.openedStatus,
//     currUserData: state.auth.currUserData,
//     isAppInitialized: state.app.isInitialized,
//   };
// }

function mapStateToProps(state) {
  return {
    mobileStatus: getMobileStatus(state),
    navBarOpenedStatus: getNavbarOpenedStatus(state),
    currUserData: getCurrUserData(state),
    isAppInitialized: getAppInitializedStatus(state),
  };
}

const dispatchStateToProps = {
  initializeApp,
};

const AppContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)(AppApiContainer);

export default AppContainer;
