const pool = require('../db/connect');

const projectsController = {};

// get projects
projectsController.getProjects = async (req, res, next) => {
  try {
    const getProjectsQuery = 'SELECT * FROM projects';
    const projects = await pool.query(getProjectsQuery);
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
    const createdProject = await pool.query(postProjectQuery, params);
    res.locals.createdProject = createdProject;
    return next ();
  } catch (err) {
    console.log(`Error in projectsController.postProject: ${err}`);
    return next(err);
  }
}

// add likes
projectsController.addLikes = async (req, res, next) => {
  try {
    // receiving project id from front end
    const { id } = req.body;
    const params = [ id ];
    // find that project and increment its like count
    const addLikesQuery = 'UPDATE projects SET likes = likes + 1 WHERE id = $1';
    await pool.query(addLikesQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in projectsController.addLikes: ${err}`);
    return next(err);
  }
}

projectsController.subtractLikes = async (req, res, next) => {
  try {
    // receiving project id from front end
    const { id } = req.body;
    const params = [ id ];
    // find that project and increment its like count
    const subtractLikesQuery = 'UPDATE projects SET likes = likes - 1 WHERE id = $1';
    await pool.query(subtractLikesQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in projectsController.subtractLikes: ${err}`);
    return next(err);
  }
}

module.exports = projectsController;