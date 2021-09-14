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
    <div>
      <Link to='/addProject'><button>Create Project</button></Link>
    </div>

  )
}

export default NewPost;