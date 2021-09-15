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
    <>
      <input id="search-bar" type="text" placeholder="search" data-testid="search" />
      <input id="search-submit" type="submit" value="Search" />
    </>

  )
}

export default SearchBar;