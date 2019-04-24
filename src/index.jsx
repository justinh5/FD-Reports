import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles/styles.scss";
import { HashRouter } from "react-router-dom";

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Component/>
    </HashRouter>,
    document.getElementById("react-app-root")
  );
};

render(App);
