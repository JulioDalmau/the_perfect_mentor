const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");

router.get("/", UserController.getAllUsers);
router.get("/search/:search", UserController.searchUser);

router.post("/", UserController.createUser);

router.put("/:id", UserController.editUser);

module.exports = router;
