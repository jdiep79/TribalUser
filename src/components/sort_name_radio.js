import React, { PropTypes } from 'react';

const SortNameRadio = ({ sort, onRadioInputChange  }) => {
  return (
    <div>
      <h5>Sort By</h5>
      <div>
      <label className="custom-control custom-radio">
        <input 
          name="name" 
          type="radio" 
          className="custom-control-input" 
          onChange={ onRadioInputChange }
          value="first"
          checked={ sort === "first"}
        />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">First Name</span>
      </label>
      <label className="custom-control custom-radio">
         <input 
          name="last" 
          type="radio" 
          className="custom-control-input" 
          onChange={ onRadioInputChange }
          value="last"
          checked={ sort === "last"}
        />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">Last Name</span>
      </label>
      </div>
    </div>
  );
};

SortNameRadio.propTypes = {
  sort: PropTypes.string.isRequired,
  onRadioInputChange: PropTypes.func.isRequired
};

export default SortNameRadio;