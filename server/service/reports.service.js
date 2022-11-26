const User = require("../models/User.model");

class ReportsService {
  static async getUsers() {
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

  static async searchUser(_id) {
    try {
      const userById = await User.findById(_id);
      return {
        error: false,
        data: userById,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = ReportsService;
