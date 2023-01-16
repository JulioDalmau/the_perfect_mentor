const User = require("../models/User.model");
const bcrypt = require("bcrypt");
// const Skill = require("../models/Skill.model");

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.find({});
      return {
        error: false,
        data: users,
      };
    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }

  static async createUser(userBody) {
    try {
      const user = new User(userBody);
      const resp = await user.save();
      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async getUser(id) {
    try {
      const resp = await User.findOne({ _id: id }).select({
        password: 0,
        salt: 0,
      });
      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async searchUser(search) {
    try {
      const user = await User.find({ name: search });
      return {
        error: false,
        data: user,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

  static async editUser(id, body) {
    try {
      const resp = await User.findByIdAndUpdate(
        id,
        {
          $addToSet: {
            name: body.name,
            lastname: body.lastname,
            age: body.age,
            role: body.role,
            country: body.country,
            language: body.language,
            profession: body.profession,
          },
        }
      );
      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = UserService;
