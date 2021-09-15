const pool = require('../db/connect');

const commentsController = {};

commentsController.postComment = async (req, res, next) => {
  try {
    const { text, projectId } = req.body;
    const params = [text, projectId];
    const postCommentQuery = `INSERT INTO comments (text,projectId) VALUES ($1,$2)`;
    await pool.query(postCommentQuery, params);
    return next ();
  } catch (err) {
    console.log(`Error in CommentsController.postComment: ${err}`);
    return next(err);
  }
}

commentsController.getComments = async (req, res, next) => {
  try {
    const { projectId } = req.body;
    const params = [projectId];
    const getCommentsQuery = `SELECT * FROM comments WHERE projectId = $1`;
    const comments = await pool.query(getCommentsQuery, params);
    res.locals.comments = comments.rows;
    return next();
  } catch (err) {
    console.log(`Error in commentsController.getComments: ${err}`);
    return next(err);
  }
}

commentsController.deleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.body;
    const params = [ commentId ];
    const deleteCommentQuery = `DELETE FROM comments WHERE id = $1`;
    await pool.query(deleteCommentQuery, params);
    return next();
  } catch (err) {
    console.log(`Error in commentsController.deleteComment: ${err}`);
    return next(err);
  }
}


module.exports = commentsController;