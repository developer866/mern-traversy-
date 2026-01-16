const expressHandler = require("express-async-handler");
// desc Get goals
// @route Get /api/goals
// @access Private
const getGoal = expressHandler(async(req, res) => {
  res.status(200).json({ message: "Get Goals" });
})

// desc set goal
// @route Set /api/goals
// @access Private
const setGoal =expressHandler( async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
  console.log(req.body);
  res.status(200).json({ message: "Set Goals" });
})

// desc update goal
// @route PUt /api/goals/:id
// @access Private
const updateGoal = expressHandler( async(req, res) => {
  res.status(200).json({ message: `update Goals ${req.params.id}` });
})

// desc Delete goals
// @route Delete /api/goals/id
// @access Private
const deleteGoal = expressHandler(async(req, res) => {
  res.status(200).json({ message: `delete Goals ${req.params.id}` });
})

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
