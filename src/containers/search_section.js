import React, { Component } from 'react';
import SearchBar from '../components/search_bar';

class SearchSection extends Component {
  constructor() {
    super();
    
    this.state = {
      term: ''
    }

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(event) {
    const state = Object.assign({}, this.state, { term: event.target.value });
    this.setState(state);
  }

  render() {
    return (
      <div>
        <SearchBar term={ this.state.term } onSearchInputChange={ this.onSearchInputChange } />
      </div>
    );
  }
}

export default SearchSection;