import React, { PropTypes } from 'react';
import  { groupUsersByName, filterSearch } from '../filters/filters';
import UserGroup from './user_group';

const UserList = ({ list, term }) => {
  if (term) {
    list = filterSearch(list, term);
  }
  
  const groups = groupUsersByName(list);
  
  const groupAndSortByName = Object.keys(groups)
    .sort()
    .map((letter) => {
      return (
        <div key={ letter }>
          <UserGroup groups={ groups[letter] } letter={ letter } />
        </div>
      );
  });

  return (
    <div className="users-list">
      { groupAndSortByName }
    </div>
  );
};

UserList.propTypes = {
  list: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired
};

export default UserList;