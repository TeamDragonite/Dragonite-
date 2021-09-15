/**
 * ************************************
 *
 * @module  NewPost
 * @author
 * @date
 * @description this is the form to create a new project
 *
 * ************************************
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NewPost = (props) => {
  return (
    <>
      <Link to='/addProject'><button id="create-project-button">Add Project+</button></Link>
    </>

  )
}

export default NewPost;