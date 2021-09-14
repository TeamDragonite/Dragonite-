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
    //push markets on market list
    default:
      return state;
  }
};

export default commentsReducer;
