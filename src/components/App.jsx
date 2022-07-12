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
import ErrorPageContainer from "./ErrorPage/ErrorPageContainer";
import LoginContainer from "./Login/LoginContainer";

function App(props) {
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
          <Route path="/*" element={<ErrorPageContainer />} />
          <Route path="/profile/:id" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/music" element={<MusicContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/settings" element={<SettingsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
