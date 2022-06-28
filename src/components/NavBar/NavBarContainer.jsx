import React from "react";
import { connect } from "react-redux";
import { changeNavBarOpenedStatusActionCreator as changeNavBarOpenedStatus } from "../../redux/navBarReducer";
import { setCurrUserDataAC as setCurrUserData, setFetchingStateAC as setFetchingState } from "../../redux/authReducer";
import NavBar from "./NavBar";

class NavBarApiContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingState(true);
    return fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      type: "GET",
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
    return <NavBar {...this.props} />
  }
} 

function mapStateToProps(state) {
  return {
    sectionList: state.navBar.sectionList,
    mobileStatus: state.navBar.mobileStatus,
    navBarOpenedStatus: state.navBar.openedStatus,
    currUserId: state.auth.currUserData.data.id,
  }
}

const mapDispatchToProps = {changeNavBarOpenedStatus, setFetchingState, setCurrUserData}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarApiContainer);

export default NavBarContainer;