import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import media from "./media";

function renderPage() {
	ReactDOM.render(<App store={store} />, document.getElementById("root"));
}

renderPage();
store.subscribe(renderPage);

window.onresize = media;
media(); // when window is loaded, window.onload triggers animation