const pool = require('../db/connect');

const tagsController = {};

// post to create tag
tagsController.createTag = async (req, res, next) => {
  try {
    const { techstackId, projectId } = req.body;
    const params = [ techstackId, projectId ];
    const createTagQuery = `INSERT INTO tags (techstackId, projectId) VALUES ($1,$2)`;
    await pool.query(createTagQuery, params);
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
    res.locals.tags = tags.rows;
    return next();
  } catch (err) {
    console.log(`Error in tagsController.getTags: ${err}`);
    return next(err);
  }
}


module.exports = tagsController;