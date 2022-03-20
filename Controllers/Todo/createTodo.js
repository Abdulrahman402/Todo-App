const joi = require("joi");

const Todo = require("../../Models/Todo");

module.exports = async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let todo = await Todo.findOne({ title: req.body.title });
  if (todo)
    return res
      .status(400)
      .json({ Message: `Todo with title '${req.body.title}' already exists` });

  todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    user: req.user._id,
  });
  await todo.save();

  res.status(201).json({ Todo: todo, Message: "Todo created" });
};

function validateTodo(todo) {
  const schema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
  });
  return schema.validate(todo);
}
