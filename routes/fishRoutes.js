const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.send('Fish route working');
});

module.exports = router;
