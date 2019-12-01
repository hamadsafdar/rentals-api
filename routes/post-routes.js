
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

router.get('/acquire', postController.acquire_post);

router.post('/create', postController.create_post);

router.delete('/delete', postController.delete_post);

router.patch('/edit', postController.edit_post);




module.exports = router;