const express = require('express');
const router = express.Router();

const searchController = require('../controllers/search-controller');

router.post('/user', searchController.find_user);

router.post('/post', searchController.find_post);





module.exports = router;