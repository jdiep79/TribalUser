import React, { Component } from 'react';

const UserList = (props) => {
  const users = props.users.map((user) => {
    return (
       <div key={ user.cell } className="card">
          <img className="card-img-top" src={ user.picture.large } alt="User Picture" />
          <div className="card-block">
            <h4 className="card-title">{ `${ user.name.first } ${ user.name.last }`}</h4>
            <p className="card-text">{ `DOB: ${ user.dob }` }</p>
            <p className="card-text">{ `City: ${ user.location.city  }` }</p>
          </div>
      </div>
    );
  });

  return (
    <div className="users-list">
      { users }
    </div>
  )
}

export default UserList;