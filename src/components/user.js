import React, { PropTypes } from 'react';
import { capitalizeFirstLetter, removeTime } from '../filters/filters';

const User = ({ user, sort }) => {
  const first = capitalizeFirstLetter(user.name.first);
  const last = capitalizeFirstLetter(user.name.last);
  const city = capitalizeFirstLetter(user.location.city);
  const DOB = removeTime(user.dob);

  const fullName = sort === 'first' ?
    `${ first } ${ last }`:
    `${ last }, ${ first }`

  return (
    <div className="card">
        <img className="card-img-top" src={ user.picture.large } alt="User Picture" />
        <div className="card-block">
          <h4 className="card-title">{ fullName }</h4>
          <p className="card-text">{ `DOB: ${ DOB }` }</p>
          <p className="card-text">{ `City: ${ city }` }</p>
        </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  sort: PropTypes.string.isRequired
};

export default User;
