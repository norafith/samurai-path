import { connect } from "react-redux";
import Header from "./Header";
import { changeNavBarOpenedStatusActionCreator as changeNavBarOpenedStatus } from "../../redux/navBarReducer";

function mapStateToProps(state) {
  return {
    mobileStatus: state.navBar.mobileStatus,
  };
}

const mapDispatchToProps = { changeNavBarOpenedStatus };

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
