import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { setFetchingStateAC as setFetchingState, setCurrUserDataAC as setCurrUserData} from "../redux/authReducer"

class AppApiContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingState(true);
    return fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86"
      }
    }).then((result) => result.json())
      .then((result) => {
      this.props.setCurrUserData(result);
      this.props.setFetchingState(false);
    })
  }
  
  render() {
    return <App {...this.props} />
  }
} 

function mapStateToProps(state) {
  return {
    mobileStatus: state.navBar.mobileStatus,
    navBarOpenedStatus: state.navBar.openedStatus,
    fetchingState: state.auth.fetchingState,
    currUserData: state.auth.currUserData
  }
}

const dispatchStateToProps = {setFetchingState, setCurrUserData};

const AppContainer = connect(mapStateToProps, dispatchStateToProps)(AppApiContainer);

export default AppContainer;