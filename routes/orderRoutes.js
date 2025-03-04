const express = require('express');
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Sample route
router.get("/", protect, authorize("admin", "buyer"), (req, res) => {
    res.json({ msg: "This is a protected order route" });
  });

module.exports = router;
