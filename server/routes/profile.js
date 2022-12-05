const express = require("express");
const router = express.Router();
const ProfileController = require("../controller/profile.controller");

router.get("/:id", ProfileController.getUser);

router.put("/:id", ProfileController.editUser);

module.exports = router;
