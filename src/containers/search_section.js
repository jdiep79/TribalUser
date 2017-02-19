import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/search_bar';
import { searchUsersAction } from '../actions/search_users_action'; 

class SearchSection extends Component {
  constructor() {
    super();
    
    this.state = {
      term: ''
    }

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(event) {
    event.preventDefault();

    const term = event.target.value
    const state = Object.assign({}, this.state, { term });
    
    this.setState(state);
    this.props.searchUsersAction(term);
  }

  render() {
    return (
      <div className="search-section">
        <SearchBar term={ this.state.term } onSearchInputChange={ this.onSearchInputChange } />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchUsersAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchSection);