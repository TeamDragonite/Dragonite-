/**
 * ************************************
 *
 * @module  projectsReducer
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
  projectList: [],
};

const projectsReducer = (state = initialState, action) => {
  let projectList;

  switch (action.type) {
    case types.GET_PROJECTS:
      const projects = action.payload;
      projectList = state.projectList.slice();

    //push markets on market list
  }
};

export default projectsReducer;
