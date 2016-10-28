import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from './ducks';

const enhancer = applyMiddleware(thunk);
export default function configureStore(initialState = {}) {
  return createStore(root, initialState, enhancer);
}
