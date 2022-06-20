import "./App.css";
import HeaderContainer from "./Header/HeaderContainer";
import NavBarContainer from "./NavBar/NavBarContainer";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";



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
          <Route path="/profile" element={<Profile />} />
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
