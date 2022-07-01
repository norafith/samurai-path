import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function withLoginRedirect(Component) {
  function ContainerComponent(props) {
    debugger;
    if (props.authState === false) return <Navigate replace to="/login" />;
    return <Component {...props} />;
  }

  function mapStateToProps(state) {
    return {
      authState: state.auth.authState,
    };
  }
  const ConnectedContainerComponent = connect(
    mapStateToProps,
    {}
  )(ContainerComponent);

  return ConnectedContainerComponent;
}

export default withLoginRedirect;
