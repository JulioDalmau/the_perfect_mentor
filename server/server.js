const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();
require("./config/db");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listen on ${process.env.PORT}`);
});
