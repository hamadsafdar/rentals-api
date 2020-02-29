
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const upload = require('../middleware/fileUpload');


router.post('/signup', upload.single('avatar'), userController.user_sign_up);

router.post('/signin', userController.user_sign_in);

router.patch('/edit', userController.user_update);


module.exports = router;

