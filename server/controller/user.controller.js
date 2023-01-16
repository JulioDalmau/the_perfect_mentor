const UserService = require("../service/user.service");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/auth.utils");

class UserController {
  static async createUser(req, res) {
    const { data, error } = await UserService.createUser(req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }


  
  static async getUser(req, res) {
    const { error, data } = await UserService.getUser(req.params.id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async getAllUsers(req, res) {
    const { data, error } = await UserService.getAllUsers();
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async searchUser(req, res) {
    const { data, error } = await UserService.searchUser(req.params.search);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async editUser(req, res) {
    console.log(req.body);
    const { data, error } = await UserService.editUser(req.params.id, req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = UserController;
