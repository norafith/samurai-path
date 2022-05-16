import React from "react";
import { connect } from "react-redux";
import App from "./App";

function mapStateToProps(state) {
  return {
    mobileStatus: state.navBar.mobileStatus,
    navBarOpenedStatus: state.navBar.openedStatus
  }
}

function dispatchStateToProps(dispatch) {
  return {};
}
const AppContainer = connect(mapStateToProps, dispatchStateToProps)(App);

export default AppContainer;