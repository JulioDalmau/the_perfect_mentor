const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller.js");

router.get("/", UserController.getAllUsers);
router.get('/:id', UserController.getUser)
router.get("/search/:search", UserController.searchUser);
router.post("/", UserController.createUser);

module.exports = router;
