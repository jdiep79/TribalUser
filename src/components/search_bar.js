import React, { Component } from 'react';

const SearchBar = (props) => {
    return (
      <form className="input-group">
        <input
          className="form-control"
          placeholder="Search..."
          value={ props.term }
          onChange={ props.onSearchInputChange }
        />
      </form>
    )
}

export default SearchBar;

