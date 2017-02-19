import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchUsersAction } from '../actions/search_users_action'; 
import { sortUsersAction } from '../actions/sort_users_action'; 

import SearchBar from '../components/search_bar';
import SortNameRadio from '../components/sort_name_radio';

class SearchSection extends Component {
  constructor() {
    super();
    
    this.state = {
      term: '',
      sort: 'first'
    }

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onRadioInputChange = this.onRadioInputChange.bind(this);
  }

  onSearchInputChange(event) {
    event.preventDefault();

    const term = event.target.value
    const state = Object.assign({}, this.state, { term });
    
    this.setState(state);
    this.props.searchUsersAction(term);
  }

  onRadioInputChange(event) {
    const sort = event.target.value
    const state = Object.assign({}, this.state, { sort });

    this.setState(state);
    this.props.sortUsersAction(sort);
  }

  render() {
    return (
      <div className="search-section">
        <SearchBar term={ this.state.term } onSearchInputChange={ this.onSearchInputChange } />
        <SortNameRadio sort={ this.state.sort } onRadioInputChange={ this.onRadioInputChange }/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchUsersAction, sortUsersAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchSection);