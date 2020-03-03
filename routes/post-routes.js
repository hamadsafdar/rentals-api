
const express = require('express');
const router = express.Router();
const checkUser = require('../middleware/check-user');
const upload = require('../middleware/photosUpload');
const postController = require('../controllers/post-controller');
const postSubroute = require('./subroute-post');        // For acquiring different types of posts


// All routes for acquiring post will go to subroute-post



router.post('/create', upload.array('property', 9), checkUser.check_auth, postController.create_post);  //TODO: Add path field to model

router.delete('/delete', checkUser.check_auth, postController.delete_post);

router.patch('/edit', checkUser.check_auth, postController.edit_post);  

router.use('/acquire', postSubroute);


module.exports = router;