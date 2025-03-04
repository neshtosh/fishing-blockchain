const express = require("express");
const { register, login } = require("../controllers/authController");
const { check } = require("express-validator");

const router = express.Router();

// Register Route
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Include a valid email").isEmail(),
    check("password", "Password must be 6+ characters").isLength({ min: 6 })
  ],
  register
);

// Login Route
router.post("/login", login);

module.exports = router;
