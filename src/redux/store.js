import { createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
