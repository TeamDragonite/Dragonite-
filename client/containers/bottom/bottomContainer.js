/**
 * ************************************
 *
 * @module  BottomContainer
 * @author
 * @date
 * @description stateful component that renders other containers
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';

const BottomContainer = (props) => {
  return (
    <div>
      <Project />
    </div>

  )
}

export default BottomContainer;