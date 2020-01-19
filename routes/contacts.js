const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      Show all contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Show all contacts');
});

// @route     POST api/contacts
// @desc      Add a contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Add a contact');
});

// @route     GET api/contacts/:id
// @desc      Show a specific contact
// @access    Private
router.get('/:id', (req, res) => {
  res.send('Show a specific contact');
});

// @route     PUT api/contacts/{id}
// @desc      Update specific contact
// @access    Restricted
router.put('/:id', (req, res) => {
  res.send('Update specific contact');
});

// @route     DELETE api/contacts/:id
// @desc      Delete specific contact
// @access    Restricted
router.delete('/:id', (req, res) => {
  res.send('Delete specific contact');
});

module.exports = router;
