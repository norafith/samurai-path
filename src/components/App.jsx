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

function App(props) {
  if (props.fetchingState === null || props.fetchingState) return <Preloader />;

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
          <Route path="/profile/:id" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
