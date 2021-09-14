/**
 * ************************************
 *
 * @module  TopContainer
 * @author
 * @date
 * @description stateful component that renders other containers
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchBar';
import NewPost from './newPost';
import FilterBar from './filterBar';

const TopContainer = (props) => {
  return (
    <div>
      <SearchBar />
      <NewPost />
      <FilterBar />
    </div>

  )
}

export default TopContainer;