import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
//logger gets added right next to thunk inside of the applyMiddleware func
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;

