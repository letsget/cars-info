import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
// import reducers from "./reducers/";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { carsReducer } from 'reducers';

const middleware = [thunk];

const store = createStore(
  carsReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };