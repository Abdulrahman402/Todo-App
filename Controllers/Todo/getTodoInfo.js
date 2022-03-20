const Todo = require("../../Models/Todo");

module.exports = async (req, res) => {
  let todo = await Todo.findOne({ _id: req.params.todoId, user: req.user._id });
  if (!todo) return res.status(404).json({ Message: "Todo not found" });

  res.status(200).json({ Todo: todo });
};
