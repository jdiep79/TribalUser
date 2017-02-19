import { combineReducers } from 'redux';
import { retrieveUsersReducer } from './retrieve_users_reducer';
import { searchUsersReducer } from './search_users_reducer';
import { sortUsersReducer } from './sort_users_reducer';
 
const rootReducer = combineReducers({
  users: retrieveUsersReducer,
  term: searchUsersReducer,
  sort: sortUsersReducer
});

export default rootReducer;
