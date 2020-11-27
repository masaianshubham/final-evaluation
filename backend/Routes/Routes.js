const express = require("express");
const { registration, login } = require("../Controllers/authController");
const {addEmployee, getEmployee,deleteEmployee} = require("../Controllers/employeeController")
const router = express.Router();

router.post("/register", registration)
router.post("/login", login)
router.post("/add", addEmployee )
router.get("/getemployee/:id", getEmployee)
router.delete("/deleteemployee/:id", deleteEmployee)

module.exports = router