
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');
const postSubroute = require('./subroute-post');        // For acquiring different types of posts


// All routes for acquiring post will go to subroute-post

router.use('/acquire', postSubroute);

router.post('/create', postController.create_post);

router.delete('/delete', postController.delete_post);

router.patch('/edit', postController.edit_post);




module.exports = router;