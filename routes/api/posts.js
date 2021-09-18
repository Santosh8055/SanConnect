const express = require('express');
const router = express.Router();

// @route get api/posts
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
