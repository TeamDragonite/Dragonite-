/**
 * ************************************
 *
 * @module  Project
 * @author
 * @date
 * @description each project on the page gets a product component
 *
 * ************************************
 */

import React from 'react';

const Project = ({ score, title, description, difficulty, effortLevel, techs }) => {
  return (
    <div>
      <button>Upvote</button>
      <button>Downvote</button>
      <p>{score}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Comment</button>
      <p>{difficulty}</p>
      <p>{effortLevel}</p>
      <p>{techs}</p>
    </div>

  )
}

export default Project;