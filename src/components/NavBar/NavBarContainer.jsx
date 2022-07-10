import { connect } from "react-redux";
import { changeNavBarOpenedStatusActionCreator as changeNavBarOpenedStatus } from "../../redux/reducers/navBarReducer";
import { getCurrUserId } from "../../redux/selectors/authSelector";
import {
  getMobileStatus,
  getNavbarOpenedStatus,
  getNavBarSectionList,
} from "../../redux/selectors/navBarSelector";
import NavBar from "./NavBar";

function mapStateToProps(state) {
  return {
    sectionList: getNavBarSectionList(state),
    mobileStatus: getMobileStatus(state),
    navBarOpenedStatus: getNavbarOpenedStatus(state),
    currUserId: getCurrUserId(state),
  };
}

const mapDispatchToProps = { changeNavBarOpenedStatus };

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
