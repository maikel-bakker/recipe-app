import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import reducers from './reducers/reducers';

export default createStore(reducers, composeWithDevTools(
    applyMiddleware(promise(), thunk, createLogger())
));