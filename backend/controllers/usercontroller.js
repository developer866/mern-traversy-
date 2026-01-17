const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const { json } = require("express");
// @desc register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // haxh password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create users
  const user = await User.create({
    name,
    email,
    password:hashedPassword
  })

  if(user){
    res.status(201).json({
      _id:user.id,
      name:user.name,
      email:user.email
    })
  }else{
    res.status(400)
    throw new Error("invalid user")

  }
});
// @desc authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
  res.json({ message: "Login User" });
};

//@desc get user data
//@route GET /api/users/me
//@access Private
const getMe = async (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = { registerUser, loginUser, getMe };
