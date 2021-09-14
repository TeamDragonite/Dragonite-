/**
 * ************************************
 *
 * @module  SearchBar
 * @author
 * @date
 * @description this is the form to create a new project
 *
 * ************************************
 */

import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input type="text" placeholder="search" data-testid="search" />
      <input type="submit" value="Search" />
    </div>

  )
}

export default SearchBar;