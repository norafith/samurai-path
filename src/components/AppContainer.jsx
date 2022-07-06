import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { initializeAppThunkCreator as initializeApp } from "../redux/appReducer";

class AppApiContainer extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return <App {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    mobileStatus: state.navBar.mobileStatus,
    navBarOpenedStatus: state.navBar.openedStatus,
    currUserData: state.auth.currUserData,
    isAppInitialized: state.app.isInitialized,
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
