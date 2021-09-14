const pool = require('../db/connect');

const tagsController = {};

// post to create tag
tagsController.createTag = async (req, res, next) => {
  try {
    const { techstackId, projectId } = req.body;
    const params = [ techstackId, projectId ];
    const createTagQuery = `INSERT INTO tags (techstackId, projectId) VALUES ($1,$2)`;
    const createdTag = await pool.query(createTagQuery, params);
    res.locals.createdTag = createdTag;
    return next ();
  } catch (err) {
    console.log(`Error in tagsController.createTag: ${err}`);
    return next(err);
  }
}

// get to get tags
tagsController.getTags = async (req, res, next) => {
  try {
    const getTagsQuery = `SELECT * FROM tags`;
    const tags = await pool.query(getTagsQuery);
    res.locals.tags = tags;
    return next();
  } catch (err) {
    console.log(`Error in tagsController.getTags: ${err}`);
    return next(err);
  }
}


module.exports = tagsController;