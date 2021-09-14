/**
 * ************************************
 *
 * @module  actions.js
 * @author  yarnett, rjpatt
 * @date    9/14/21
 * @description Actions
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

const searchProjects = (searchTerm, projects) => ({
  type: types.SEARCH_PROJECTS,
  payload: { searchTerm, projects }, //is this the appropriate payload?
})

const filterProjects = (diffFilter, effortFilter, techFilter, projects) => ({
  type: types.FILTER_PROJECTS,
  payload: { diffFilter, effortFilter, techFilter, projects }, //is this the appropriate payload?
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

const addComment = (text, timestamp) => ({
  type: types.ADD_COMMENT,
  payload: { text, timestamp },
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

actions.searchProjectsThunk = (searchTerm) => dispatch => {
  //fetch request to post new project
  fetch(`/api/projects?q=${searchTerm}`)
    .then(res => res.json)
    .then(data => {
      dispatch(searchProjects(searchTerm, data.rows));
    })
    .catch(err => console.log('error in searchProjectThunk fetch: ', err));
}

actions.filterProjectsThunk = (diffFilter, effortFilter, techFilter) => dispatch => {
  //fetch request to post new project
  fetch(`/api/projects?difficult=${diffFilter}&effort=${effortFilter}&techs=${techFilter}`)
    .then(res => res.json)
    .then(data => {
      dispatch(filterProjects(diffFilter, effortFilter, techFilter, data.rows));
    })
    .catch(err => console.log('error in filterProjectThunk fetch: ', err));
}

actions.upvoteProjectThunk = (projectId, score) => dispatch => {
  const newScore = score + 1;
  fetch('/api/projects', {
    method: 'PUT',
    body: JSON.stringify({ projectId, newScore }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(upvoteProject(projectId));
      } else {
        console.log('in upvote project thunk - server returned status ', res.status)
      }
    })
    .catch(err => console.log('error in upvoteProjectThunk fetch: ', err));
}

actions.downvoteProjectThunk = (projectId, score) => dispatch => {
  const newScore = score - 1;
  fetch('/api/projects', {
    method: 'PUT',
    body: JSON.stringify({ projectId, newScore }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(downvoteProject(projectId));
      } else {
        console.log('in downvote project thunk - server returned status ', res.status)
      }
    })
    .catch(err => console.log('error in downvoteProjectThunk fetch: ', err));
}

actions.getCommentsThunk = (projectId) => dispatch => {
  //fetch request to post new project
  fetch(`/api/comments/${projectId}`)
    .then(res => res.json)
    .then(data => {
      dispatch(getComments(data.rows));
    })
    .catch(err => console.log('error in getCommentsThunk fetch: ', err));
}

actions.addCommentThunk = (text, timestamp) => dispatch => {
  //fetch request to post new project
  fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ text, timestamp }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(addComment(text, timestamp));
      } else {
        console.log('in add Commment thunk - server returned status ', res.status)
      }
    })
    .catch(err => console.log('error in addCommmentThunk fetch: ', err));
}

actions.deleteCommentThunk = (commentId) => dispatch => {
  fetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(deleteComment(commentId));
      } else {
        console.log('in delete Comment thunk - server returned status ', res.status)
      }
    })
    .catch(err => console.log('error in deleteCommentThunk fetch: ', err));
}

export default actions;