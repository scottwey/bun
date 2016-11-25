import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IndexContainer from './containers/Index';
import './index.css';
import configureStore, { loadState, saveState, throttle } from './store';

const persistedState = loadState();
console.log(persistedState);
const store = configureStore(persistedState);
const throttleState = {};
store.subscribe(throttle.bind(throttleState, () => { saveState(store.getState()); }, 500));

ReactDOM.render(
  <Provider store={store}>
    <IndexContainer />
  </Provider>
  , document.getElementById('root')
);
