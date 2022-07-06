import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthState } from "../../redux/selectors/authSelector";

function withLoginRedirect(Component) {
  function ContainerComponent(props) {
    if (props.authState === false) return <Navigate replace to="/login" />;
    return <Component {...props} />;
  }

  function mapStateToProps(state) {
    return {
      authState: getAuthState(state),
    };
  }
  const ConnectedContainerComponent = connect(
    mapStateToProps,
    {}
  )(ContainerComponent);

  return ConnectedContainerComponent;
}

export default withLoginRedirect;
