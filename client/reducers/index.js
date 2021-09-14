/**
 * ************************************
 *
 * @module  index.js
 * @author rjpatt
 * @date  9/14/21
 * @description simply a place to combine reducers
 *
 * ************************************
 */
import { combineReducers } from "redux";
// import all reducers from other files here
import projectsReducer from "./projectsReducer";
import commentsReducer from "./commentsReducer";

// combine reducers
const reducers = combineReducers({
  projects: projectsReducer,
  comments: commentsReducer,
})

// make the combined reducers available for import by exporting 
export default reducers;