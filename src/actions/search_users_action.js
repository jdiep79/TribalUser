const SEARCH_USERS = 'SEARCH_USERS';

const searchUsersAction = (term) => {
  return {
    type: SEARCH_USERS,
    payload: term
  }
};

export { 
  SEARCH_USERS,
  searchUsersAction
}
