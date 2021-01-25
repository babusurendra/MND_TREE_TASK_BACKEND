const express = require(`express`);
const router = express.Router();
const userController = require("../controller/user-controller");
router.get("/getUsers", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user/login", userController.userLogin);
module.exports = router;