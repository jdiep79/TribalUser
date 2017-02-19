import { combineReducers } from 'redux';
import { retrieveUsersReducer } from './retrieve_users_reducer';
import { searchUsersReducer } from './search_users_reducer';
 
const rootReducer = combineReducers({
  users: retrieveUsersReducer,
  term: searchUsersReducer
});

export default rootReducer;
