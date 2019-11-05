import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './modules/reducers';

export function initializeStore(data) {
  return createStore(
    reducers,
    typeof data === 'undefined' ? {} : data,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
