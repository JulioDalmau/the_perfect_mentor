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

  static async newUser() {
    try {
      const newMentee = await User.find({ role: "mentee" }).count({
        createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      });
      const newMentors = await User.find({ role: "mentor" }).count({
        createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      });
      const totalNewUsers = await User.find({}).count({
        createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      });
      return {
        error: false,
        data: ({newMentee, newMentors, totalNewUsers}),
      };
    } catch (error) {
      console.log(error);
    }
  }

  static async signupMonth() {
   
    try {
      
      const allDates = await User.aggregate([{ $project: {month: {$month: "$date"}} }])
     
     const months = allDates.map( allMonths => allMonths.month)

      let jan = 0
      let feb = 0
      let mar = 0
      let apr = 0
      let may = 0
      let jun = 0
      let jul = 0
      let aug = 0
      let sep = 0
      let oct = 0
      let nov = 0
      let dec = 0

      const filter = months.filter( month => {
       if( month === 1  ) return jan += 1
       if( month === 2  ) return feb += 1
       if( month === 3  ) return mar += 1
       if( month === 4  ) return apr += 1
       if( month === 5  ) return may += 1
       if( month === 6  ) return jun += 1
       if( month === 7  ) return jul += 1
       if( month === 8  ) return aug += 1
       if( month === 9  ) return sep += 1
       if( month === 10  ) return oct += 1
       if( month === 11  ) return nov += 1
       if( month === 12  ) return dec += 1
      })
      console.log("Esto es months -->", months)
      console.log("Esto es enero -->", jan)
      
      return {
        error: false,
        data: ({jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec})
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = StadisticsService;
