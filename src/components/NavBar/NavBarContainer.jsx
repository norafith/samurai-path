import { connect } from "react-redux";
import { changeNavBarOpenedStatusActionCreator as changeNavBarOpenedStatus } from "../../redux/navBarReducer";
import NavBar from "./NavBar";

function mapStateToProps(state) {
  return {
    sectionList: state.navBar.sectionList,
    mobileStatus: state.navBar.mobileStatus,
    navBarOpenedStatus: state.navBar.openedStatus,
    currUserId: state.auth.currUserData?.data.id,
  };
}

const mapDispatchToProps = { changeNavBarOpenedStatus };

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
