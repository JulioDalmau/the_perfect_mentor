const User = require("../models/User.model");

class ProfileService {
  static async getUser(_id) {
    try {
      const userById = await User.findById(_id);
      return {
        error: false,
        data: userById,
      };
    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }

  static async editUser(id, { age, password, email }) {
    try {
      const user = await User.findByIdAndUpdate({})
    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }
}

module.exports = ProfileService;
