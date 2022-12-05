const express = require("express");
const router = express.Router();
const AuthController = require("../controller/auth.controller");
const { validateAuth } = require("../middlewares/auth");

router.get("/me", validateAuth, (req, res) => res.send(req.user));

router.post("/signup", AuthController.signUp);
router.post("/login", AuthController.logIn);
router.post("/logout", AuthController.logOut);

module.exports = router;
