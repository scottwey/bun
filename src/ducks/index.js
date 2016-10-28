import { combineReducers } from 'redux';
import game from './game';

const allReducers = combineReducers({
  game,
});

const mainReducer = (state, action) => allReducers(state, action);

export default mainReducer;
