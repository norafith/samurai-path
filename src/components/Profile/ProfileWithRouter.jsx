import { useParams, useLocation, useNavigate } from "react-router-dom";

function ProfileWithRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    debugger;
    return <Component {...props} params={params} location={location} navigate={navigate} />
  }

  return ComponentWithRouterProp;
}

export default ProfileWithRouter;