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

actions.addPost = (title, description, difficulty, time, language) => ({
  type: types.ADD_POST,
  payload: { title, description, difficulty, time, language },
});

actions.getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

actions.deletePost = (postId) => ({
  type: types.DELETE_POST,
  payload: postId,

})

actions.searchPosts = (searchTerm) => ({
  type: types.SEARCH_POSTS,
  payload: searchTerm, //is this the appropriate payload?
})

actions.upvotePost = (postId) => ({
  type: types.UPVOTE_POST,
  payload: postId,
})

actions.downvotePost = (postId) => ({
  type: types.DOWNVOTE_POST,
  payload: postId,
})

actions.getComments = (comments) => ({
  type: types.GET_COMMENTS,
  payload: comments,
})

actions.addComment = (text, time) => ({
  type: types.ADD_COMMENT,
  payload: { text, time },
})

actions.deleteComment = (commentId) => ({
  type: types.DELETE_COMMENT,
  payload: commentId,
})


export default actions;