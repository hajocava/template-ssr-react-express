import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from '../reducers';

const initialState = window.__INITIAL_STATE__

export const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
