import "./App.css";
import HeaderContainer from "./Header/HeaderContainer";
import NavBarContainer from "./NavBar/NavBarContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Dialogs from "./Dialogs/Dialogs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";
import Preloader from "./common/Preloader/Preloader";
import PrivateRoute from "./common/PrivateRoute/PrivateRouteContainer";

function App(props) {
  if (props.fetchingState) return <Preloader />;

  let appWrapperClass = "";

  if (props.mobileStatus) {
    appWrapperClass += " mobile";
  }

  if (props.navBarOpenedStatus) {
    appWrapperClass += " navBarOpened";
  }

  return (
    <BrowserRouter>
      <div id="app-wrapper" className={appWrapperClass}>
        <HeaderContainer />
        <NavBarContainer />
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRoute>
                <h1>Page not found</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <ProfileContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <PrivateRoute>
                <Dialogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/music"
            element={
              <PrivateRoute>
                <Music />
              </PrivateRoute>
            }
          />
          <Route
            path="/news"
            element={
              <PrivateRoute>
                <News />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
