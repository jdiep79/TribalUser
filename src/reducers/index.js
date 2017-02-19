import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: retrieveUsers
});

export default rootReducer;
