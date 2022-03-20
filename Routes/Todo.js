const express = require("express");

const router = express.Router();

const auth = require("../Middlewares/auth");

const create = require("../Controllers/Todo/createTodo");
const update = require("../Controllers/Todo/updateTodo");
const getTodoInfo = require("../Controllers/Todo/getTodoInfo");
const deleteTodo = require("../Controllers/Todo/deleteTodo");

router.post("/create", auth, create);
router.put("/update/:todoId", auth, update);
router.get("/getTodoInfo/:todoId", auth, getTodoInfo);
router.delete("/deleteTodo/:todoId", auth, deleteTodo);

module.exports = router;
