import { RETRIEVE_USERS } from '../actions/retrieve_users_action';

export const retrieveUsersReducer = (state = [], action) => {
  if (action.type === RETRIEVE_USERS) {
    return [ ...action.payload.data.results, ...state ];
  }

  return state;
}