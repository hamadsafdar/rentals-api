
const express = require('express');
const router = express.Router();
const forumController = require('../controllers/discussion-controller');
const checkUser = require('../middleware/check-user');

//TODO: Create a subroute

router.get('/topic/all', forumController.get_all_topics);

router.get('/topic/:topicId', forumController.get_topic_comments);

router.post('/topic', checkUser.check_auth, forumController.create_discussion_topic);

router.post('/comment', checkUser.check_auth, forumController.create_comment);

router.delete('/topic/:topicId', checkUser.check_auth, forumController.delete_topic);

router.delete('/comment/:commentId', checkUser.check_auth, forumController.delete_comment);





module.exports = router;