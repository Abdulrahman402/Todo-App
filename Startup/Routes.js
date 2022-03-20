const express = require("express");
const cors = require("cors");

const todo = require("../Routes/Todo");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/todo", todo);
};
