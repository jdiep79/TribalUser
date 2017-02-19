const SORT_USERS = 'SORT_USERS';

const sortUsersAction = (sort) => {
  return {
    type: SORT_USERS,
    payload: sort
  };
};

export {
  SORT_USERS,
  sortUsersAction
}