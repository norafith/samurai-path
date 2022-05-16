import store from "./redux/redux-store";
import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./components/AppContainer";
import media from "./media";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

function renderPage() {
  root.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

renderPage();
// store.subscribe(renderPage);

window.onresize = media;
media(); // when window is loaded, window.onload triggers animation
