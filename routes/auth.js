const express = require('express');
const router = express.Router();

// @route     GET api/auth
// @desc      Get logged i user
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged i user');
});

// @route     POST api/auth
// @desc      Auth userand get token
// @access    Public
router.post('/', (req, res) => {
  res.send('Login user');
});

module.exports = router;
