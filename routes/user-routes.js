const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const userCheck = require("../middleware/check-user");
const upload = require("../middleware/avatarUpload");

router.post(
	"/signup",
	/*upload.single('avatar'), userCheck.check_user_exists,*/ userController.user_sign_up
);

router.post("/signin", userCheck.check_auth, userController.user_sign_in);

router.get("/signout", userController.user_sign_out);

router.patch("/edit", userCheck.check_auth, userController.user_update);

module.exports = router;
