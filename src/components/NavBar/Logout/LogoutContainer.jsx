import { connect } from "react-redux";
import Logout from "./Logout";
import { logoutThunkCreator as logout } from "../../../redux/authReducer";
import { getAuthState } from "../../../redux/selectors/authSelector";

function mapStateToProps(state) {
  return {
    authState: getAuthState(state),
  };
}
const mapDispatchToProps = { logout };
const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;
