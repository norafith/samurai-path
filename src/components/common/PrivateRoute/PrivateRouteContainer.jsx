import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

function mapStateToProps(state) {
  return {
    authState: state.auth.authState,
  };
}
const PrivateRouteContainer = connect(mapStateToProps, {})(PrivateRoute);

export default PrivateRouteContainer;
