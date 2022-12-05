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
    photo: {
      type: String,
    },
    profession: {
      type: String,
    },
    role: {
      type: String,
    },
    language: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) return next();
  this.salt = bcrypt.genSaltSync();
  return (this.password = await bcrypt.hash(this.password, this.salt));
});

module.exports = mongoose.model("User", UserSchema);
