/**
 * ************************************
 *
 * @module  FilterBar
 * @author
 * @date
 * @description this is the form to create a new project
 *
 * ************************************
 */

import React from 'react';

const FilterBar = (props) => {
  return (
    <div>
      <p>Filter by: </p>
      <button>Difficulty</button>
      <button>Effort Level</button>
      <button>Tech</button>
    </div>

  )
}

export default FilterBar;