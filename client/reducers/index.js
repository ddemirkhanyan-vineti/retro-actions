import { combineReducers } from 'redux';
import todos from './todos';
import retro from './retro';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  retro,
  visibilityFilter
})