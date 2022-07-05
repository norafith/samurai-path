import { connect } from "react-redux";
import Login from "./Login";
import { loginAuthThunkCreator as loginAuth } from "../../redux/authReducer";

function mapStateToProps(state) {
  return {
    authState: state.auth.authState,
    currUserId: state.auth.currUserData?.data.id,
  };
}
const mapDispatchToProps = { loginAuth };
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
