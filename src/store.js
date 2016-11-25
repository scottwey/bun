import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './ducks';

const enhancer = applyMiddleware(thunk);
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bunQuestRedux');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('bunQuestRedux', serializedState);
  } catch (err) {
    console.error(err);
  }
};

export function throttle(fxn, delay) {
  const self = this;
  self.now = new Date();
  if (!self.prev) {
    self.prev = [];
    self.prev.push(self.now);
  }
  const earliest = Math.min(...self.prev);
  if (self.now - earliest > delay) {
    fxn();
    self.prev = [];
  }
  self.prev.push(self.now);
}
