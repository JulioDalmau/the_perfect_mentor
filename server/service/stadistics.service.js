const User = require("../models/User.model");

class StadisticsService {
  static async allUser() {
    try {
      const totalMentees = await User.count({ role: "mentee" });
      const totalMentors = await User.count({ role: "mentor" });
      const totalUsers = await User.count();
      
      const array = Object.values({totalMentees, totalMentors, totalUsers})
      const resp = array.toString()
      
      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  // static async newUser() {
  //   try {
  //     const newMentee = await User.find({ role: "mentee" }).count({
  //       createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  //     });
  //     const newMentors = await User.find({ role: "mentor" }).count({
  //       createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  //     });
  //     const totalNewUsers = await User.find({}).count({
  //       createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  //     });
  //     console.log(newMentee, newMentors, totalNewUsers);
  //     return {
  //       error: false,
  //       data: (newMentee, newMentors, totalNewUsers),
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // static async signupMonth() {}
}

module.exports = StadisticsService;
