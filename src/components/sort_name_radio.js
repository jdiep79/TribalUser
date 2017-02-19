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

export default SortNameRadio;

// <div>
//         <input onChange={ onRadioInputChange } type="radio" value="first" name="name" checked={ sort === "first"}/>First Name<br />
//         <input onChange={ onRadioInputChange } type="radio" value="last" name="name" checked={ sort === "last"}/>Last Name<br />
//       </div>