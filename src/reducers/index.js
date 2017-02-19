import { combineReducers } from 'redux';
import { retrieveUsersReducer } from './retrieve_users_reducer';

const rootReducer = combineReducers({
  users: retrieveUsersReducer
});

export default rootReducer;
