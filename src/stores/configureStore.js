import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleWare } from 'react-router-redux';
import rootReducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleWare(browserHistory);

const createStoreWithMiddleWare = applyMiddleware(router, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleWare(rootReducer, initialState);
}