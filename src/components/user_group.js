import React, { PropTypes } from 'react';
import User from './user';

const UserGroup = ({ groups, letter }) => {
  const users = groups.map((user) => {
    return (
      <div key={ user.cell } >
        <User user={ user }/>
      </div>
    );
  });

  return (
    <div>
      <h1>{ letter.toUpperCase() }</h1>
      <hr />
      <div className="group-list">
        { users }
      </div>
    </div>
  );
};

UserGroup.propType = {
  groups: PropTypes.array.isRequired,
  letter: PropTypes.string.isRequired
};

export default UserGroup;