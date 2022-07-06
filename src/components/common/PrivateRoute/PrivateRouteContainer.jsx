import { connect } from "react-redux";
import { getAuthState } from "../../../redux/selectors/authSelector";
import PrivateRoute from "./PrivateRoute";

function mapStateToProps(state) {
  return {
    authState: getAuthState(state),
  };
}
const PrivateRouteContainer = connect(mapStateToProps, {})(PrivateRoute);

export default PrivateRouteContainer;
