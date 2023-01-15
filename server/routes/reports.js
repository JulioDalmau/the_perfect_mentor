const express = require("express");
const router = express.Router();
const ReportsController = require("../controller/reports.controller");

router.get("/", ReportsController.getUsers);
router.get('/search/:id', ReportsController.searchUser)
router.get('/:id', ReportsController.searchUser)

module.exports = router;
