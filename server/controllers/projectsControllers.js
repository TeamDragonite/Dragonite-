const db = require('../db/connect');

const projectsController = {};

// get projects
projectsController.getProjects = async (req, res, next) => {
  try {
    const getProjectsQuery = 'SELECT * FROM projects';
    const projects = await db.query(getProjectsQuery);
    res.locals.projects = projects;
    return next ();
  } catch (err) {
    console.log(`Error in projectsController.getProjects: ${err}`);
    return next(err);
  }
}

// create project
projectsController.postProject = async (req, res, next) => {
  try {
    const { title, description, difficulty, effortLevel } = req.body;
    const params = [ title, description, difficulty, effortLevel ];
    const postProjectQuery = 'INSERT into projects (title,description,difficulty,effortLevel) values ($1,$2,$3,$4)';
    const createdProject = await db.query(postProjectQuery, params);
    res.locals.createdProject = createdProject;
    return next ();
  } catch (err) {
    console.log(`Error in projectsController.postProject: ${err}`);
    return next(err);
  }
}

// add likes
projectsController.addLikes = async (req, res, next) => {
  
  
  
}


module.exports = projectsController;