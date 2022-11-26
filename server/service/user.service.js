const User = require("../models/User.model");

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.find({});
      // const usersData = users.map( (user) => {return (user.name)})
      // console.log(usersData);
      return {
        error: false,
        data: users
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

  static async searchUser(search) {
    try {
      const user = await User.find({ username: search });
      return {
        error: false,
        data: user,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

  static async editUser(id, { username, password, email }) {
    try {
      const user = await User.findByIdAndUpdate(id, {
        $set: { username: username, password: password, email: email },
      });
      return user;
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = UserService;
