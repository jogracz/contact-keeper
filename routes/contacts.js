const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route     GET api/contacts
// @desc      Show all contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/contacts
// @desc      Add a contact
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('email', 'Please include a valid email').isEmail()
    ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      contact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      await contact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
