const pool = require('../db/connect');

const commentsController = {};

commentsController.postComment = async (req, res, next) => {
  try {
    const { text, projectId } = req.body;
    const params = [ text, projectId ];
    const postCommentQuery = `INSERT INTO comments (text,projectId) VALUES ($1,$2)`;
    const createdComment = await pool.query(postCommentQuery, params);
    res.locals.createdComment = createdComment.rows;
    return next ();
  } catch (err) {
    console.log(`Error in CommentsController.postComment: ${err}`);
    return next(err);
  }
}

commentsController.getComments = async (req, res, next) => {
  try {
    const { projectId } = req.body;
    const params = [ projectId ];
    const getCommentsQuery = `SELECT * FROM comments WHERE projectId = $1`;
    await pool.query(getCommentsQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in commentsController.getComments: ${err}`);
    return next(err);
  }
}


module.exports = commentsController;