const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/usercontroller");



router.route("/").get(registerUser)



module.exports = router;