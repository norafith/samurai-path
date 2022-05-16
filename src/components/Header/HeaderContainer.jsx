import { connect } from "react-redux";
import Header from "./Header";
import { changeNavBarOpenedStatusActionCreator } from "../../redux/navBarReducer";

function mapStateToProps(state) {
  return {
    mobileStatus: state.navBar.mobileStatus
  }
}

function dispatchStateToProps(dispatch) {
  return {
    changeNavBarOpenedStatus() {
      dispatch(changeNavBarOpenedStatusActionCreator())
    }
  }
}

const HeaderContainer = connect(mapStateToProps, dispatchStateToProps)(Header); 

export default HeaderContainer;