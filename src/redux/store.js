import { configureStore, createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'


const composedEnhancers = composeWithDevTools();
const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: composedEnhancers,
});

export default store;
