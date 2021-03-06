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
        <UserList list={ this.props.users } term={ this.props.term } sort={ this.props.sort } />
      </div>
    );
  };
}

function mapStateToProps({ users, term, sort }) {
  return { users, term, sort };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ retrieveUsersAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSection);