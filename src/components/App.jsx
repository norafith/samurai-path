import "./App.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";


function App(props) {
	
	let appWrapperClass = "";
	
	if (props.store.getState().navBar.mobileStatus) {
		appWrapperClass += " mobile";
	}
	
	if (props.store.getState().navBar.openedStatus) {
		appWrapperClass += " navBarOpened";
	}
	
  return (
    <BrowserRouter>
      <div id="app-wrapper" className={appWrapperClass}>
        <Header store={props.store} />
        <NavBar store={props.store} />
        <Routes> 
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends store={props.store} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
