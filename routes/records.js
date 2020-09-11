const express = require('express');
const router = express.Router();

// @route       GET api/records
// @desc        Get all users records
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all records');
});

// @route       POST api/records
// @desc        Add new record
// @access      Private
router.post('/', (req, res) => {
  res.send('Add records');
});

// @route       PUT api/records:id
// @desc        Update record
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update record');
});

// @route       Delete api/records:id
// @desc        Delete record
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete record');
});

module.exports = router;
