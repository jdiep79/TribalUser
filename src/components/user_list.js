import React, { PropTypes } from 'react';
import  { groupUsersByName } from '../filters/filters';
import UserGroup from './user_group';

const UserList = ({ list }) => {
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
  list: PropTypes.array.isRequired
};

export default UserList;