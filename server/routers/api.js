const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsControllers');
const postsController = require('../controllers/postsControllers');
const tagsController = require('../controllers/tagsControllers');

// posts routes
router.get('/posts', (req, res) => res.status(200).json(res.locals.posts));
router.post('/posts', (req, res) => res.status(200).json(res.locals.createdPost));
router.put('/posts', (req, res) => res.status(200).json(res.locals.updatedPost));

// comments routes
router.get('/comments', (req, res) => res.status(200).json(res.locals.comments))
router.post('/comments', (req, res) => res.status(200).json(res.locals.createdComment));

// tags routes
router.get('/tags', (req, res) => res.status(200).json(res.locals.tags));
router.post('/tags', (req, res) => res.status(200).json(res.locals.createdTag));

module.exports = router;