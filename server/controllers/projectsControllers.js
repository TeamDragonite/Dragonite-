const pool = require('../db/connect');

const projectsController = {};

// get projects
projectsController.getProjects = async (req, res, next) => {
  try {
    const getProjectsQuery = 'SELECT * FROM projects';
    const projects = await pool.query(getProjectsQuery);
    res.locals.projects = projects.rows;
    return next();
  } catch (err) {
    console.log(`Error in projectsController.getProjects: ${err}`);
    return next(err);
  }
}

// create project
projectsController.postProject = async (req, res, next) => {
  try {
    const { title, description, difficulty, effortLevel } = req.body;
    const params = [title, description, difficulty, effortLevel];
    const postProjectQuery = 'INSERT into projects (title,description,difficulty,effortLevel) values ($1,$2,$3,$4)';
    await pool.query(postProjectQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in projectsController.postProject: ${err}`);
    return next(err);
  }
}

// delete project 
projectsController.deleteProject = async (req, res, next) => {
  try {
    const { projectId } = req.body;
    const params = [ projectId ];
    // first delete tags and comments associated with project, then delete project
    const deleteTagsQuery = 'DELETE FROM tags WHERE projectId = $1';
    await pool.query(deleteTagsQuery, params);
    const deleteCommentsQuery = 'DELETE FROM comments WHERE projectId = $1';
    await pool.query(deleteCommentsQuery, params);
    const deleteProjectQuery = 'DELETE FROM projects WHERE id = $1';
    await pool.query(deleteProjectQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in projectsController.deleteProject: ${err}`);
    return next(err);
  }
}

// add likes
projectsController.addLikes = async (req, res, next) => {
  try {
    // receiving project id from front end
    const { projectId } = req.body;
    const params = [projectId];
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
    const { projectId } = req.body;
    const params = [projectId];
    // find that project and increment its like count
    const subtractLikesQuery = 'UPDATE projects SET likes = likes - 1 WHERE id = $1';
    await pool.query(subtractLikesQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in projectsController.subtractLikes: ${err}`);
    return next(err);
  }
}

projectsController.search = async (req, res, next) => {
  try {
    // search is currently case-sensitive
    const { searchTerm } = req.body;
    const searchQuery = `
      SELECT * FROM projects WHERE 
      description LIKE '%${searchTerm}%' OR
      title LIKE '%${searchTerm}%' 
      `;
    const searchResults = await pool.query(searchQuery);
    res.locals.searchResults = searchResults.rows;
    return next();
  } catch (err) {
    console.log(`Error in projectsController.search: ${err}`);
    return next(err);
  }
}

projectsController.filterByTech = async (req, res, next) => {
  try {
    // search is currently case-sensitive
    const { techlist } = req.body;
    const techQuery = `
      SELECT * FROM projects WHERE 
      id IN (SELECT projectId FROM tags WHERE techstackId = (SELECT id FROM techstack WHERE name = '${techlist}')) 
      `;
    const techResults = await pool.query(techQuery);
    res.locals.techResults = techResults.rows;
    return next();
  } catch (err) {
    console.log(`Error in projectsController.filterByTech: ${err}`);
    return next(err);
  }
}

projectsController.filterByDifficulty = async (req, res, next) => {
  try {
    const { difficulty } = req.body;
    const difficultyQuery = `
      SELECT * FROM projects WHERE 
      difficulty LIKE '%${difficulty}%' 
      `;
    const difficultyResults = await pool.query(difficultyQuery);
    res.locals.difficultyResults = difficultyResults.rows;
    return next();
  } catch (err) {
    console.log(`Error in projectsController.filterByDifficulty: ${err}`);
    return next(err);
  }
}

projectsController.filterByEffortLevel = async (req, res, next) => {
  try {
    const { effortLevel } = req.body;
    const effortLevelQuery = `
      SELECT * FROM projects WHERE 
      effortLevel LIKE '%${effortLevel}%'
      `;
    const effortLevelResults = await pool.query(effortLevelQuery);
    res.locals.effortLevelResults = effortLevelResults.rows;
    return next();
  } catch (err) {
    console.log(`Error in projectsController.filterByEffortLevel: ${err}`);
    return next(err);
  }
}

module.exports = projectsController;