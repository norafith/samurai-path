import "./App.css";
import HeaderContainer from "./Header/HeaderContainer";
import NavBarContainer from "./NavBar/NavBarContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MusicContainer from "./Music/MusicContainer";
import NewsContainer from "./News/NewsContainer";
import SettingsContainer from "./Settings/SettingsContainer";
import UsersContainer from "./Users/UsersContainer";
import Preloader from "./common/Preloader/Preloader";
// import PrivateRoute from "./common/PrivateRoute/PrivateRouteContainer";
import ErrorPageContainer from "./ErrorPage/ErrorPageContainer";
import LoginContainer from "./Login/LoginContainer";

function App(props) {
  if (!props.isAppInitialized) return <Preloader />;

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
            path="/*"
            element={
              // <PrivateRoute>
              <ErrorPageContainer />
              // </PrivateRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              // <PrivateRoute>
              <ProfileContainer />
              // </PrivateRoute>
            }
          />
          <Route
            path="/dialogs/*"
            element={
              // <PrivateRoute>
              <DialogsContainer />
              // </PrivateRoute>
            }
          />
          <Route
            path="/music"
            element={
              // <PrivateRoute>
              <MusicContainer />
              // </PrivateRoute>
            }
          />
          <Route
            path="/news"
            element={
              // <PrivateRoute>
              <NewsContainer />
              // </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              // <PrivateRoute>
              <SettingsContainer />
              // </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              // <PrivateRoute>
              <UsersContainer />
              // </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
