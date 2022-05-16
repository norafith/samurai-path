import { connect } from "react-redux";
import { changeNavBarOpenedStatusActionCreator } from "../../redux/navBarReducer";
import NavBar from "./NavBar";

function mapStateToProps(state) {
  return {
    sectionList: state.navBar.sectionList,
    mobileStatus: state.navBar.mobileStatus,
    navBarOpenedStatus: state.navBar.openedStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeNavBarOpenedStatus() {
      dispatch(changeNavBarOpenedStatusActionCreator())
    }
  }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;