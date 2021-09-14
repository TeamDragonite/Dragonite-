const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsControllers');
const projectsController = require('../controllers/projectsControllers');
const tagsController = require('../controllers/tagsControllers');

// posts routes
router.get('/projects', projectsController.getProjects, (req, res) => res.status(200).json(res.locals.projects));
router.post('/projects', projectsController.postProject, (req, res) => res.status(200).json(res.locals.createdProject));
router.put('/projects', (req, res) => res.status(200).json(res.locals.updatedProject));

// comments routes
router.get('/comments', (req, res) => res.status(200).json(res.locals.comments))
router.post('/comments', (req, res) => res.status(200).json(res.locals.createdComment));

// tags routes
router.get('/tags', (req, res) => res.status(200).json(res.locals.tags));
router.post('/tags', (req, res) => res.status(200).json(res.locals.createdTag));


module.exports = router;