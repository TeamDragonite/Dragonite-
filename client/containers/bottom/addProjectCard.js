/**
 * ************************************
 *
 * @module  AddProjectCard
 * @author
 * @date
 * @description this is the form to create a new project
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';

const mapStateToProps = store => ({
  projectList: store.projects.projectList,
});

const mapDispatchToProps = dispatch => ({
  addProject: (title, description, difficulty, time, language) => {
    dispatch(actions.addProjectThunk(title, description, difficulty, time, language))
  }
});

class AddProjectCard extends Component {
  render() {
    return (
      <div>
        <form id="add-project-form" onSubmit={e => {
          e.preventDefault();
          const title = document.querySelector('#add-project-title').value;
          const description = document.querySelector('#add-project-description').value;
          const difficulty = document.querySelector('#add-project-difficulty').value;
          const effortLevel = document.querySelector('#add-project-effort').value;
          // const techs = document.querySelector('#add-project-techs').value;
          this.props.addProject(title, description, difficulty, effortLevel)
          this.props.history.push('/');
        }}>
          <input id="add-project-title" type="text" placeholder="Title" />
          <input id="add-project-description" type="text" placeholder="Description" />
          <label htmlFor="add-project-difficulty">Difficulty:</label>
          <select id="add-project-difficulty">
            <option value="">--Please choose a difficulty--</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <label htmlFor="add-project-effort">Level of effort:</label>
          <select id="add-project-effort">
            <option value="">--Please choose an effort level--</option>
            <option value="1/2 day">1/2 day</option>
            <option value="1 day">1 day</option>
            <option value="3 days">3 days</option>
            <option value="7 days">7 days</option>
            <option value="more">More than 7 days</option>
          </select>
          {/* <label htmlFor="add-project-techs">Techs:</label>
          <select id="add-project-techs" multiple>
            <option value="">--Please choose one or more tech--</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Redux">Redux</option>
            <option value="Node">Node</option>
            <option value="Express">Express</option>
          </select> */}
          <input id="add-project-submit" type="submit" value="Add Project" />
        </form>
      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectCard);