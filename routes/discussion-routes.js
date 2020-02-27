
const express = require('express');
const router = express.Router();
const forumController = require('../controllers/discussion-controller');

//TODO: Create a subroute

router.get('/alltopics', forumController.get_all_topics);

router.get('/topic/:topicId', forumController.get_topic_comments);

router.post('/topic', forumController.create_discussion_topic);

router.post('/comment', forumController.create_comment);

router.delete('/topic/:topicId', forumController.delete_topic);

router.delete('/comment/:commentId', forumController.delete_comment);





module.exports = router;