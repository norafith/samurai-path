import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  debugger;

  if (props.authState) {
    return props.children;
  }

  return <Navigate replace to="/login" />;
}

export default PrivateRoute;
