const express = require("express");
const router = express.Router();
const AuthController = require("../controller/auth.controller");
const { validateAuth } = require("../middleware/auth");

router.get("/me", validateAuth, (req, res) => res.send(req.email));

router.post("/signup", AuthController.signUp);
router.post("/login",  AuthController.logIn);
router.post("/logout", AuthController.logOut);

module.exports = router;
