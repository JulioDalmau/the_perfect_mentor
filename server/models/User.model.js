const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    age: {
      type: Number,
    },
    country: {
      type: String,
    },
    pic: {
      type: String,
    },
    profession: {
      type: String,
    },
    skill: {
      type: Array,
      lowercase: true,
      default: [],
    },  /* [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: "Skill"
      }
    ], */ 
    role: {
      type: String,
      required: true
    },
    language: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    }
  },
  /* { timestamps: true } */
);

// UserSchema.pre("save", async function (next) {
  
//   if(!this.isModified('password')) return next()

//   try {
//     this.salt = bcrypt.genSaltSync(10)
//     this.password = await bcrypt.hash(this.password, this.salt)
//     next()
//   } catch (error) {
//     console.log(error)
//     throw new Error('Hash password fail')
//   }
  
// });

UserSchema.pre('save', async function () {
  this.salt = bcrypt.genSaltSync()
  return (this.password = await bcrypt.hash(this.password, this.salt))
  })

//Este codigo funciona OK

// UserSchema.statics.login = async function(email, password){
//   const user = await this.findOne({email})
//   if(user) {
//     const auth = await bcrypt.compare(password, user.password)
//     if(auth){
//       return user
//     } else {

//       throw Error("incorrect password")
//     }
//   } 
    
//     throw Error("incorrect email")
//   }

module.exports = mongoose.model("User", UserSchema);
