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
import { Route, Switch } from 'react-router-dom';

const MainContainer = (props) => {
  return (
    <div>
      <h1>Unnamed Dragonite App</h1>
      <TopContainer />

      <Switch>
        <Route exact path='/'>
          <BottomContainer />
        </Route>
        <Route exact path='/addproject'>
          <AddProjectCard />
        </Route>
      </Switch>

    </div>

  )
}

export default MainContainer;