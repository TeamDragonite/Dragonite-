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

const SearchBar = ({ searchProjects, searchTerm, projectList }) => {
  return (
    <div>
      <input id="searchButton" type="text" placeholder="search" data-testid="search" onKeyUp={(e) => searchTerm = e.target.value}/>
      <input type="submit" value="Search" onClick={() => searchProjects(searchTerm)}/>
    </div>

  )
}

export default SearchBar;