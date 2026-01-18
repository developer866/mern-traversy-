const expressHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
const User = require("../model/userModel");
// desc Get goals
// @route Get /api/goals
// @access Private
const getGoal = expressHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// desc set goal
// @route Set /api/goals
// @access Private
const setGoal = expressHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({ text: req.body.text, user: req.user.id });

  res.status(200).json(goal);
});

// desc update goal
// @route PUt /api/goals/:id
// @access Private
const updateGoal = expressHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {  
    res.status(401);
    throw new Error("User not found");
  }
  
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// desc Delete goals
// @route Delete /api/goals/id
// @access Private
const deleteGoal = expressHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json(`message: Deleted goal with id ${req.params.id}`);
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
