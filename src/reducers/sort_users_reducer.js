import { SORT_USERS } from '../actions/sort_users_action';

const sortUsersReducer = (state = 'first', action) => {
  if (action.type === SORT_USERS) {
    return action.payload;
  }

  return state;
}

export { sortUsersReducer }