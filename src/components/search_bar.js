import React, { Component, PropTypes } from 'react';

const SearchBar = ({ term, onSearchInputChange }) => {
    return (
      <form className="input-group">
        <input
          className="form-control"
          placeholder="Search..."
          value={ term }
          onChange={ onSearchInputChange }
        />
      </form>
    )
}

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired
}

export default SearchBar;

