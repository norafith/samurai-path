import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { authCurrUserThunkCreator as authCurrUser } from "../redux/authReducer";

class AppApiContainer extends React.Component {
  componentDidMount() {
    this.props.authCurrUser();
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
    fetchingState: state.auth.fetchingState,
    authState: state.auth.authState,
  };
}

const dispatchStateToProps = {
  authCurrUser,
};

const AppContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)(AppApiContainer);

export default AppContainer;
