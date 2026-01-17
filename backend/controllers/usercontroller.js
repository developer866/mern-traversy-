// @desc register a new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
}

// @desc authenticate a user 
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
}

module.exports = { registerUser };