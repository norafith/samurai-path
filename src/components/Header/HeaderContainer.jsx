import { connect } from "react-redux";
import Header from "./Header";
import { changeNavBarOpenedStatusActionCreator as changeNavBarOpenedStatus } from "../../redux/navBarReducer";
import { getMobileStatus } from "../../redux/selectors/navBarSelector";

function mapStateToProps(state) {
  return {
    mobileStatus: getMobileStatus(state),
  };
}

const mapDispatchToProps = { changeNavBarOpenedStatus };

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
