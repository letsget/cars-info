import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from "./App";
import {store} from './store';
import "bootstrap/dist/css/bootstrap.css";

//const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
