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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchBar';
import NewPost from './newPost';
import FilterBar from './filterBar';
import actions from '../../actions/actions';

const mapStateToProps = store => ({
  projectList: store.projects.projectList,
  searchTerm: store.projects.searchTerm,
  techList: store.projects.techList,
  filteredList: store.projects.filteredList,
  difficulty: store.projects.difficulty,
  effortLevel: store.projects.effortLevel,
  isFiltered: store.projects.isFiltered,
});

const mapDispatchToProps = dispatch => ({
  searchProjects: (searchTerm) => {
    dispatch(actions.searchProjectsThunk(searchTerm))
  },
  filterProjectsByDifficulty: (e) => {
    dispatch(actions.filterProjectsByDifficulty(e.target.value))
  },
  filterProjectsByEffortLevel: (e) => {
    dispatch(actions.filterProjectsByEffortLevel(e.target.value))
  },
  filterProjectsByTech: (e) => {
    dispatch(actions.filterProjectsByTech()) //how to invoke this one?
  }
});

class TopContainer extends Component {

  render() {
    return (
      <>
        <SearchBar searchProjects={this.props.searchProjects} searchTerm={this.props.searchTerm} projectList={this.props.projectList} />

        <FilterBar filterProjectsByDifficulty={this.props.filterProjectsByDifficulty} filterProjectsByEffortLevel={this.props.filterProjectsByEffortLevel}
          filterProjectsByTech={this.props.filterProjectsByTech} filteredList={this.props.filteredList} projectList={this.props.projectList}
          isFiltered={this.props.isFiltered} difficulty={this.props.difficulty} effortLevel={this.props.effortLevel} techList={this.props.techList} />
        <NewPost />
      </>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopContainer);