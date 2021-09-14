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

    //push markets on market list
  }
};

export default commentsReducer;
