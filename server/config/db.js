const mongoose = require("mongoose");


const database = mongoose
  .connect(process.env.MONGO_URL,
    {useNewUrlParser: true,
    useUnifiedTopology: true})
  
  .then(() => console.log("database connected"))
  .catch((error) => console.error(error));

module.exports = database;
