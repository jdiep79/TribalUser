import React, { PropTypes } from 'react';

const User = ({ user, sort }) => {
  const fullName = sort === 'first' ?
    `${ user.name.first } ${ user.name.last }`:
    `${ user.name.last }, ${ user.name.first }`

  return (
    <div className="card">
        <img className="card-img-top" src={ user.picture.large } alt="User Picture" />
        <div className="card-block">
          <h4 className="card-title">{ fullName }</h4>
          <p className="card-text">{ `DOB: ${ user.dob }` }</p>
          <p className="card-text">{ `City: ${ user.location.city  }` }</p>
        </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
