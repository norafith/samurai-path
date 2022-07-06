import { connect } from "react-redux";
import Login from "./Login";
import { loginAuthThunkCreator as loginAuth } from "../../redux/authReducer";
import {
  getAuthState,
  getCurrUserId,
} from "../../redux/selectors/authSelector";

function mapStateToProps(state) {
  return {
    authState: getAuthState(state),
    currUserId: getCurrUserId(state),
  };
}
const mapDispatchToProps = { loginAuth };
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
