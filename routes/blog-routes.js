const blogController = require('../controllers/blog-controller');
const express = require('express');
const router = express.Router();


router.post('/create', blogController.create_blog);

router.get('/acquire', blogController.get_blog);

router.patch('/update', blogController.update_blog);

router.delete('/delete', blogController.delete_blog);


module.exports = router;