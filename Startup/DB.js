const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "database connection error:"));
  db.once("open", function () {
    winston.info("connected to Todo database!");
  });
};
