require("express-async-errors");
require("dotenv").config();
const express = require("express");
const winston = require("winston");

const app = express();

require("./Startup/DB")();
require("./Startup/Routes")(app);

let port = process.env.PORT;

app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});
