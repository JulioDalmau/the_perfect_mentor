const express = require("express");
const router = express.Router();
const user = require("./user");
const auth = require('./auth..js');
const profile = require('./profile.js')
const reports = require("./reports.js");
const stadistics = require("./stadistics.js");

router.use("/user", user);
router.use('/auth', auth)
router.use("/profile", profile);
router.use("/reports", reports);
router.use("/stadistics", stadistics);

module.exports = router;
