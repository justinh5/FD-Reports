import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import rootReducer from './reducers/index';
import styles from "./styles/main.scss";
import { HashRouter } from "react-router-dom";


// const store = createStore(rootReducer);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Component/>
    </HashRouter>,
    document.getElementById("react-app-root")
  );
};

render(App);

// <Provider store={store}>
//   <Component/>
// </Provider>
