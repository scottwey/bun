import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IndexContainer from './containers/Index';
import root from './ducks';
import './index.css';

import configureStore from './store';

const store = configureStore();

if (module.hot) {
  module.hot.accept('./ducks', () => {
    const nextRoot = require('./ducks');
    store.replaceReducer(nextRoot);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <IndexContainer />
  </Provider>
  , document.getElementById('root')
);
