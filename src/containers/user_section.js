import React, { Component } from 'react';
import UserList from '../components/user_list';

class UserSection extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  };
}

export default UserSection;