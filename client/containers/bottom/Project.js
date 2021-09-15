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

const Project = ({ likes, title, description, difficulty, effortLevel, upvoteProject, downvoteProject, id, techs }) => {

  return (
    <div>
      <button onClick={() => upvoteProject(id)}>Upvote</button>
      <button onClick={() => downvoteProject(id)}>Downvote</button>
      <p>{likes}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Comment</button>
      <p>{difficulty}</p>
      <p>{effortLevel}</p>
      {/* <p>{techs}</p> */}
    </div>

  )
}

export default Project;