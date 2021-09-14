/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date    
 * @description Action Type Constants
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const actions = {};

const addProject = (title, description, difficulty, time, language) => ({
  type: types.ADD_PROJECT,
  payload: { title, description, difficulty, time, language },
});

const getProjects = (projects) => ({
  type: types.GET_PROJECTS,
  payload: projects,
});

const deleteProject = (projectId) => ({
  type: types.DELETE_PROJECT,
  payload: projectId,

})

const searchProjects = (searchTerm) => ({
  type: types.SEARCH_PROJECTS,
  payload: searchTerm, //is this the appropriate payload?
})

const upvoteProject = (projectId) => ({
  type: types.UPVOTE_PROJECT,
  payload: projectId,
})

const downvoteProject = (projectId) => ({
  type: types.DOWNVOTE_PROJECT,
  payload: projectId,
})

const getComments = (comments) => ({
  type: types.GET_COMMENTS,
  payload: comments,
})

const addComment = (text, time) => ({
  type: types.ADD_COMMENT,
  payload: { text, time },
})

const deleteComment = (commentId) => ({
  type: types.DELETE_COMMENT,
  payload: commentId,
})

actions.addProjectThunk = (title, description, difficulty, time, language) => dispatch => {
  //fetch request to post new project
  fetch('/api/addProject', {
    method: 'POST',
    body: JSON.stringify({ title, description, difficulty, time, language }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(addProject(title, description, difficulty, time, language));
      } else {
        console.log('in add project thunk - server returned status ', res.status)
      }
    })
    .catch(err => console.log('error in addProjectThunk fetch: ', err));
}

actions.getProjectThunk = () => dispatch => {
  //fetch request to post new project
  fetch('/api/projects')
    .then(res => res.json)
    .then(data => {
      dispatch(getProjects(data.rows));
    })
    .catch(err => console.log('error in getProjectThunk fetch: ', err));
}

actions.deleteProjectThunk = (projectId) => dispatch => {
  //fetch request to post new project
  fetch(`/api/projects/${projectId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(deleteProject(projectId));
      } else {
        console.log('in delete project thunk - server returned status ', res.status)
      }
    })
    .catch(err => console.log('error in deleteProjectThunk fetch: ', err));
}

export default actions;