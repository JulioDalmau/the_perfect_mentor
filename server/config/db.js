const mongoose = require("mongoose");
require("dotenv").config();

const database = mongoose
  .connect(process.env.MONGO_URL,
    {useNewUrlParser: true,
    useUnifiedTopology: true})
  
  .then(() => console.log("database connected"))
  .catch((error) => console.error(error));

module.exports = database;
