import { combineReducers } from 'redux';

import userInput from './message-input/reducers';

const entities = combineReducers({
  userInput
});

export default combineReducers({
  entities
});
