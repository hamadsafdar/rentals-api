
const express = require('express');
const router = express.Router();
const forumController = require('../controllers/discussion-controller');

//TODO: Create a subroute

router.post('/create/topic',forumController.create_discussion_topic);

router.post('/create/comment', forumController.create_comment);

router.delete('/delete/topic/:topicId', forumController.delete_topic);

router.delete('/delete/comment/:commentId', forumController.delete_comment);





module.exports = router;