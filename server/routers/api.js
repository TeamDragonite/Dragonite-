const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsControllers');
const projectsController = require('../controllers/projectsControllers');
const tagsController = require('../controllers/tagsControllers');

// posts routes
router.get('/projects', projectsController.getProjects, (req, res) => res.status(200).json(res.locals.projects));
router.post('/projects', projectsController.postProject, (req, res) => res.status(200).json(res.locals.createdProject));
router.put('/projects/addLikes', projectsController.addLikes, (req, res) => res.status(200).send());
router.put('/projects/subtractLikes', projectsController.subtractLikes, (req, res) => res.status(200).send());

// comments routes
router.get('/comments', commentsController.getComments, (req, res) => res.status(200).json(res.locals.comments))
router.post('/comments', commentsController.postComment, (req, res) => res.status(200).json(res.locals.createdComment));

// tags routes
router.get('/tags', tagsController.getTags, (req, res) => res.status(200).json(res.locals.tags));
router.post('/tags', tagsController.createTag, (req, res) => res.status(200).json(res.locals.createdTag));


module.exports = router;