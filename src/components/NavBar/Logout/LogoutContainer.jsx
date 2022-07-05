import { connect } from "react-redux";
import Logout from "./Logout";
import { logoutThunkCreator as logout } from "../../../redux/authReducer";

function mapStateToProps(state) {
  return {
    authState: state.auth.authState,
  };
}
const mapDispatchToProps = { logout };
const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;
