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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopContainer from './top/topContainer';
import BottomContainer from './bottom/bottomContainer';
import AddProjectCard from './bottom/addProjectCard';
import { Route, Switch } from 'react-router-dom';
import actions from '../actions/actions';
import { Link } from 'react-router-dom';

const mapStateToProps = store => ({
  projectList: store.projects.projectList,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => {
    dispatch(actions.getProjectThunk())
  },
});

class MainContainer extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    return (
      <div id="main-container">
        <nav><Link to='/'><h1>Rachel.js</h1></Link>
          <TopContainer projectList={this.props.projectList} />
        </nav>

        <Switch>
          <Route exact path='/'>
            <BottomContainer projectList={this.props.projectList} />
          </Route>
          <Route exact path='/addproject'>
            <AddProjectCard projectList={this.props.projectList} />
          </Route>
        </Switch>

      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);