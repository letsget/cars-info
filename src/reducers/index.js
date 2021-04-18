import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import { carsReducer } from './carsReducer';

const rootReducer = combineReducers({
  app: carsReducer,
  // form: formReducer,
});

export { rootReducer };