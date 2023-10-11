const express = require("express");
const User = require("../model/UserModel");
const { protect } = require("../middleware/auth");

const {
	registerUser,
	login,
	UpdateProfile,
	setReminder,
	deleteReminder,
	editReminder,
	getProfile,
	getrem	 
} = require("../controller/Auth/AuthController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/getreminder", getrem);
 


router.put("/update-user-details/:_id", UpdateProfile);
 

router.get("/get-user-details",  getProfile);
 
router.put("/edit",editReminder);
router.delete("/delete",deleteReminder);
router.post("/set",setReminder)
router.post("/login", login);
 
 

module.exports = router;
