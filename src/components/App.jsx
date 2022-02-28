import "./App.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div id="app-wrapper">
        <Header />
        <NavBar />
        <Routes> 
          <Route path="/profile" element={<Profile posts={props.state.profile.posts} />} />
          <Route path="/dialogs/*" element={<Dialogs messages={props.state.dialogs.messages} chatOptions={props.state.dialogs.chatOptions} />} />
          <Route path="/music" element={<Music/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
