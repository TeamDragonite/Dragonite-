/**
 * ************************************
 *
 * @module  commentsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

//import action types here
import * as types from '../constants/actionTypes';

const initialState = {
  //initial state here
  commentList: [],
};

const commentsReducer = (state = initialState, action) => {
  let commentList;

  switch (action.type) {
    case types.GET_COMMENTS:
      const comments = action.payload;
      commentList = state.commentList.slice();
      comments.forEach(comment => {
        const newComment = {
          id: comment.id,
          text: comment.text,
        }
        commentList.push(newComment);
      })
      return {
        ...state,
        commentList
      };
    case types.ADD_COMMENT:
      commentList = state.commentList.slice()
      const newComment = {
        id: action.payload.id,
        text: action.payload.text
      }
      commentList.push(newComment);
      return {
        ...state, commentList
      }
    case types.DELETE_COMMENT:
      commentList = state.commentList.slice();
      commentList.filter(comment => comment.id !== action.payload);
      return {
        ...state, commentList
      };
    default:
      return state;
  }
};

export default commentsReducer;
