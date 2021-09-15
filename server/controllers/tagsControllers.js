const pool = require('../db/connect');

const tagsController = {};

// post to create tag
tagsController.createTag = async (req, res, next) => {
  try {
    console.log('in tags controller create Tag');
    const { techstackId, projectId } = req.body;
    console.log('techid and projectid in tagControler: ', techstackId, projectId);
    const params = [ techstackId, projectId ];
    const createTagQuery = `INSERT INTO tags (techstackId, projectId) VALUES ($1,$2)`;
    const createdTag = await pool.query(createTagQuery, params);
    console.log('createdTag in tagController: ', createdTag)
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
    console.log('in tags controller get Tag');
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