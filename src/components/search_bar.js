import React, { PropTypes } from 'react';

const SearchBar = ({ term, onSearchInputChange }) => {
    return (
      <div className="search-bar">
        <form className="input-group">
          <input
            className="form-control"
            placeholder="Search..."
            value={ term }
            onChange={ onSearchInputChange }
          />
        </form>
      </div>
     
    );
};

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired
};

export default SearchBar;

