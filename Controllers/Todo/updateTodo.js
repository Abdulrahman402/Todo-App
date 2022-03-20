const joi = require("joi");

const Todo = require("../../Models/Todo");

module.exports = async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let todo = await Todo.findOne({ _id: req.params.todoId, user: req.user._id });
  if (!todo) return res.status(404).json({ Message: "Todo not found" });

  todo.title = req.body.title;
  todo.description = req.body.description;
  await todo.save();

  res.status(200).json({ Todo: todo, Message: "Todo updated" });
};

function validateTodo(todo) {
  const schema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
  });
  return schema.validate(todo);
}
