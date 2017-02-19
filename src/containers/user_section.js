import React, { Component } from 'react';
import UserList from '../components/user_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveUsersAction } from '../actions/retrieve_users_action';

class UserSection extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.retrieveUsersAction();
  }

  render() {
    return (
      <div>
        <UserList list={ this.props.users } />
      </div>
    );
  };
}

function mapStateToProps({ users }) {
  return { users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ retrieveUsersAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSection);