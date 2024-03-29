const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listen on ${process.env.PORT}`);
});
