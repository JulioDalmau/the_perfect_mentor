const express = require("express");
const router = express.Router();
const StadisticsController = require("../controller/stadistics.controller");

router.get("/totalofusers", StadisticsController.allUser);
// router.get("/newusers", StadisticsController.newUser);
// router.get('/signupspermonth', StadisticsController.signupMonth)

module.exports = router;
