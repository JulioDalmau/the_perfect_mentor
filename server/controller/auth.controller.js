const User = require("../models/User.model");
const UserService = require("../service/user.service");
const { validateToken, generateToken } = require("../utils/auth.utils");
const bcrypt = require("bcrypt");

class AuthController {

  static async signUp(req, res) {
    const { error, data } = await UserService.createUser(req.body);
    if (error) {
      return res.status(400).send(error._message);
    }
    const token = generateToken({
      _id: data._id,
      email: data.email,
      role: data.role
    });
    const payload = validateToken(token);
    req.user = payload;
    res.cookie("token", token, { maxAge: 900000 });

    res.status(201).send(data);  
  }

  static async logIn(req, res) {

    const user = await User.findOne({ email: req.body.email});
    if (!user) return res.sendStatus(401);
        
    const passwordHashed = bcrypt.hashSync(req.body.password, user.salt);

    if (passwordHashed === user.password) { 

    const token = generateToken({
        _id: user._id,
        email: user.email,
        role: user.role
      });
    const payload = validateToken(token);
    req.user = payload;
    res.cookie("token", token, { maxAge: 900000 });
    res.status(201).send(req.user);

      
    } else return res.sendStatus(401);

  }

  static async logOut(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }
}

module.exports = AuthController;
