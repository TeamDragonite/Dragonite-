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
  techList: [],
  filteredList: [],
  difficulty: '',
  effortLevel: '',
  isFiltered: false,
};

const projectsReducer = (state = initialState, action) => {
  let projectList;
  let searchTerm;
  let techList;
  let filteredList;
  let isFiltered;
  let difficulty;
  let effortLevel;


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
          likes: project.likes,
          difficulty: project.difficulty,
          effortlevel: project.effortlevel,
          // techs: project.techs
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
        likes: action.payload.likes,
        difficulty: action.payload.difficulty,
        effortlevel: action.payload.effortlevel,
        // techs: action.payload.techs
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
    case types.FILTER_PROJECTS_BY_TECH:
      filteredList = action.payload.projects;
      isFiltered = true;
      techList = action.payload.techList;
      return {
        ...state, techList, isFiltered, filteredList
      };
    case types.FILTER_PROJECTS_BY_DIFFICULTY:
      projectList = state.projectList.slice();
      if (!isFiltered) {
        filteredList = projectList.filter(project => project.difficulty === action.payload);
      } else {
        filteredList = state.filteredList.slice();
        filteredList = filteredList.filter(project => project.difficulty === action.payload);
      }
      isFiltered = true;
      difficulty = action.payload;
      return {
        ...state, difficulty, isFiltered, filteredList
      };
    case types.FILTER_PROJECTS_BY_EFFORT_LEVEL:
      projectList = state.projectList.slice();
      if (!isFiltered) {
        filteredList = projectList.filter(project => project.effortLevel === action.payload);
      } else {
        filteredList = state.filteredList.slice();
        filteredList = filteredList.filter(project => project.effortLevel === action.payload);
      }
      isFiltered = true;
      effortLevel = action.payload;
      return {
        ...state, effortLevel, isFiltered, filteredList
      };
    case types.UPVOTE_PROJECT:
      projectList = state.projectList.slice();
      projectList.forEach(project => {
        if (action.payload === project.id) {
          project.likes++;
        }
      })
      return {
        ...state, projectList
      };
    case types.DOWNVOTE_PROJECT:
      projectList = state.projectList.slice();
      projectList.forEach(project => {
        if (action.payload === project.id) {
          project.likes--;
        }
      })
      return {
        ...state, projectList
      };
    default:
      return state;
  }
};

export default projectsReducer;
