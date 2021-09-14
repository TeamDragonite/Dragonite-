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

const TopContainer = (props) => {
  return (
    <div>
      <SearchBar />
    </div>

  )
}

export default TopContainer;