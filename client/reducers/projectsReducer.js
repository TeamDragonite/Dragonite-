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
import { act } from 'react-dom/test-utils';
import * as types from '../constants/actionTypes';

const initialState = {
  //initial state here
  projectList: [],
  searchTerm: '',
};

const projectsReducer = (state = initialState, action) => {
  let projectList;
  let searchTerm;

  switch (action.type) {
    case types.GET_PROJECTS:
      const projects = action.payload;
      projectList = state.projectList.slice();

      //push markets on market list
      projects.forEach(project => {
        const newProject = {
          id: project.id,
          title: project.title,
          description: project.description,
          score: project.score,
          difficulty: project.difficulty,
          effortLevel: project.effortLevel,
          techs: project.techs
        }
        projectList.push(newProject);
      })
      return {
        ...state,
        projectList
      };
    case types.ADD_PROJECT:
      const newProject = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        score: action.payload.score,
        difficulty: action.payload.difficulty,
        effortLevel: action.payload.effortLevel,
        techs: action.payload.techs
      }
      projectList = state.projectList.slice();
      projectList.push(newProject);
      return {
        ...state, projectList
      };
    case types.DELETE_PROJECT:
      projectList = state.projectList.slice();
      projectList.filter(project => project.id !== action.payload);
      return {
        ...state, projectList
      };
    case types.SEARCH_PROJECTS:
      projectList = action.payload.projects;
      searchTerm = action.payload.searchTerm;
      return {
        ...state, projectList, searchTerm
      };
    case types.FILTER_PROJECTS:
      projectList = action.payload.projects;
      return {
        ...state, projectList
      };
    case types.UPVOTE_PROJECT:

    case types.DOWNVOTE_PROJECT:
    default:
      return state;
  }
};

export default projectsReducer;
