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
      <p>Test from Bottom Container!</p>
      <Project />
    </div>

  )
}

export default BottomContainer;