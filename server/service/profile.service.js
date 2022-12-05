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

  static async editUser(
    id,
    { email, password, age, role, country, profession, language, skills }
  ) {
    try {
      const user = await User.findByIdAndUpdate(id, {
        $set: {
          email: email,
          password: password,
          age: age,
          role: role,
          country: country,
          profession: profession,
          language: language,
          skills: skills,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }
}

module.exports = ProfileService;
