const User = require("../models/User.model");
const bcrypt = require('bcrypt');
// const Skill = require("../models/Skill.model");
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

 
  static async editUser( id, userBody) {
    try {

      const user = await User.find({_id: id})
      console.log("PROFILE SERVICE USER", user)
      console.log("PROFILE SERVICE SALT", user.pic)
      const username = userBody.username !== "" ? userBody.username : user.username;
      const name = userBody.name !== "" ? userBody.name : user.name
      const lastname = userBody.lastname !== "" ? userBody.lastname : user.lastname
      const email = userBody.email !== "" ? userBody.email : user.email;
      const password = userBody.password !== "" ? userBody.password : user.password;
      const age = userBody.age !== "" ? userBody.age : user.age;
      const role = userBody.role !== "" ? userBody.role : user.role;
      const country = userBody.country !== "" ? userBody.country : user.country;
      const pic = userBody.pic !== "" ? userBody.pic : user[0].pic;
      const profession = userBody.profession !== "" ? userBody.profession : user.profession;
      const language = userBody.language !== "" ? userBody.language : user.language;
      const salt =  user[0].salt
      // const salt = bcrypt.genSaltSync(); user.salt
      const skill = userBody.skill !== "" ? userBody.skill : user.skill;

      const resp = await User.findByIdAndUpdate(
        id, {
          $set:{
            password: password && bcrypt.hashSync(password, salt),
            username,
            name,
            lastname,
            email,
            age,
            role,
            country,
            pic,
            profession,
            language,
          },
          $addToSet: {
            
            skill:  skill
          }
        },
          {new: true}
        );

        return {
          error: false,
          data: resp,
        }

    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }
}

module.exports = ProfileService;
