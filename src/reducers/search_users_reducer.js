import { SEARCH_USERS } from '../actions/search_users_action';

const searchUsersReducer = (state = '', action) => {
  if (action.type === SEARCH_USERS) {
    console.log('action.payload', action.payload);
    return action.payload;
  }
  
  return state;
};

export { searchUsersReducer }