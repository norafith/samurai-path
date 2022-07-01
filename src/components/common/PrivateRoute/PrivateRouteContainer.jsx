import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

function mapStateToProps(state) {
  return {
    authStatus: state.auth.authStatus,
  };
}
const PrivateRouteContainer = connect(mapStateToProps, {})(PrivateRoute);

export default PrivateRouteContainer;
