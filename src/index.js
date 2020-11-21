import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Material Design Imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import * as serviceWorker from './serviceWorker';

//import reducer
import reducer from "./reducer/reducer";
//import Provider
//Provider makes the store availability to "App component".
//import applyMiddleware
//applyMiddleware function used to apply the middleware like saga or thunk
import { Provider } from "react-redux";
//import createSagaMiddleware function
import createSagaMiddleware from "redux-saga";
//import actions
import { main_fun } from "./actions/actions";
import { createStore,applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(main_fun);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
