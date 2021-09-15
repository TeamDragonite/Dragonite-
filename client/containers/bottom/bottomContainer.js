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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project';
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
  getProjects: () => {
    dispatch(actions.getProjectThunk())
  },
  upvoteProject: (id) => {
    dispatch(actions.upvoteProjectThunk(id))
  },
  downvoteProject: (id) => {
    dispatch(actions.downvoteProjectThunk(id))
  }
});

class BottomContainer extends Component {


  render() {
    const renderList = [];
    if (this.props.isFiltered) {
      this.props.filteredList.forEach(proj => {
        renderList.push(<Project upvoteProject={this.props.upvoteProject} downvoteProject={this.props.downvoteProject} key={proj.id} id={proj.id} title={proj.title}
          description={proj.description} likes={proj.likes} difficulty={proj.difficulty}
          effortLevel={proj.effortlevel}
        />)
      })
    } else {
      if (this.props.projectList.length) {
        let slicedProjList = this.props.projectList.slice();
        slicedProjList.sort((a, b) => b.likes - a.likes);
        slicedProjList = slicedProjList.slice(0, 10);
        slicedProjList.forEach(proj => {
          renderList.push(<Project upvoteProject={this.props.upvoteProject} downvoteProject={this.props.downvoteProject} key={proj.id} id={proj.id} title={proj.title}
            description={proj.description} likes={proj.likes} difficulty={proj.difficulty}
            effortLevel={proj.effortlevel}
          />)
        })
      }

    }
    return (
      <div id="bottom-container">
        {renderList}
      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomContainer);;