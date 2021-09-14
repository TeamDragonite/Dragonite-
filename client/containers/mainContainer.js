/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders other containers
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import TopContainer from './top/topContainer';
import BottomContainer from './bottom/bottomContainer';
import AddProjectCard from './bottom/addProjectCard';
import { Router, Route, Switch } from 'react-router';

const MainContainer = (props) => {
  return (
    <div>
      <p>Test from Main Container!</p>
      <TopContainer />
      <Router>
        <Switch>
          <Route exact path='/'>
            <BottomContainer />
          </Route>
          <Route exact path='/addproject'>
            <AddProjectCard />
          </Route>
        </Switch>
      </Router>
    </div>

  )
}

export default MainContainer;