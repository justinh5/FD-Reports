import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import styles from './styles/main.scss';
import { HashRouter } from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);
