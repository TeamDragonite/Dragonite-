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

import React from 'react';

const AddProjectCard = (props) => {
  return (
    <div>
      <form id="add-project-form">
        <input id="add-project-title" type="text" placeholder="Title" />
        <input id="add-project-description" type="text" placeholder="Description" />
        <label htmlFor="add-project-difficulty">Difficulty:</label>
        <select id="add-project-difficulty">
          <option value="">--Please choose a difficulty--</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <label htmlFor="add-project-effort">Level of effort:</label>
        <select id="add-project-effort">
          <option value="">--Please choose an effort level--</option>
          <option value="1/2 Day">1/2 day</option>
          <option value="1 Day">1 day</option>
          <option value="3 Days">3 days</option>
          <option value="7 Days">7 days</option>
          <option value="More">More than 7 days</option>
        </select>
        <label htmlFor="add-project-techs">Techs:</label>
        <select id="add-project-techs" multiple>
          <option value="">--Please choose one or more tech--</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Redux">Redux</option>
          <option value="Node">Node</option>
          <option value="Express">Express</option>
        </select>
        <input id="add-project-submit" type="submit" value="Add Project" />
      </form>
    </div>

  )
}

export default AddProjectCard;