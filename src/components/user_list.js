import React, { PropTypes } from 'react';
import  { groupUsersByName, filterSearch } from '../filters/filters';
import UserGroup from './user_group';

const UserList = ({ list, term, sort }) => {
  if (term) {
    list = filterSearch(list, term);
  }
  
  const groups = groupUsersByName(list, sort);
  
  const groupAndSortByName = Object.keys(groups)
    .sort()
    .map((letter) => {
      return (
        <div key={ letter }>
          <UserGroup groups={ groups[letter] } letter={ letter } sort={ sort }/>
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