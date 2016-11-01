import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IndexContainer from './containers/Index';
import './index.css';

import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <IndexContainer />
  </Provider>
  , document.getElementById('root')
);
