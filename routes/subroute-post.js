// subroute to find posts of a specific user

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

//Get all types of posts
router.get('/all', postController.acquire_all_posts);
// Get any type of post
router.get('/:id', postController.acquire_post);

//Get all Sharing Posts
router.get('/sharing', postController.get_sharing_posts);
// Get a specific Sharing Post
router.get('/sharing/:id', postController.acquire_post);

// Get all Renting Posts
router.get('/renting', postController.get_renting_posts);
// Get a specific Renting Post
router.get('/renting/:id', postController.acquire_post);


module.exports = router;
