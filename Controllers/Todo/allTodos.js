const Todo = require("../../Models/Todo");

module.exports = async (req, res) => {
  let todo = await Todo.find({ user: req.user._id });
  if (!todo) return res.status(404).json({ Message: "No todos found" });

  res.status(200).json({ Todos: todo });
};
