import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  if (props.authStatus) {
    return props.children;
  }

  return <Navigate replace to="/login" />;
}

export default PrivateRoute;
