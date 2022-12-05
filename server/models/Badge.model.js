const mongoose = require("mongoose");

const BadgeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", BadgeSchema);
