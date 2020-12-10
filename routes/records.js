const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult, body } = require('express-validator');

const User = require('../models/User');
const Record = require('../models/Record');

// @route       GET api/records
// @desc        Get all users records
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(records);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/records
// @desc        Add new record
// @access      Private
router.post(
  '/',
  [auth, [check('title', 'Title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      artist,
      label,
      catalogNumber,
      releaseDate,
      format,
      country,
      coverFront,
      coverBack,
      coverLp,
      condition,
      barcode,
      locationPrimary,
      locationSecondary,
      want,
      have,
      genre,
      style,
    } = req.body;

    try {
      const newRecord = new Record({
        title,
        artist,
        label,
        catalogNumber,
        releaseDate,
        format,
        country,
        coverFront,
        coverBack,
        coverLp,
        condition,
        barcode,
        locationPrimary,
        locationSecondary,
        user: req.user.id,
        want,
        have,
        genre,
        style,
      });

      const record = await newRecord.save();

      res.json(record);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       PUT api/records:id
// @desc        Update record
// @access      Private
router.put('/:id', auth, async (req, res) => {
  const {
    title,
    artist,
    label,
    catalogNumber,
    releaseDate,
    format,
    country,
    coverFront,
    coverBack,
    coverLp,
    condition,
    barcode,
    locationPrimary,
    locationSecondary,
    test,
    want,
    have,
    genre,
    style,
  } = req.body;

  //Build record object
  const recordFields = {};
  if (title) recordFields.title = title;
  if (artist) recordFields.artist = artist;
  if (label) recordFields.label = label;
  if (catalogNumber) recordFields.catalogNumber = catalogNumber;
  if (releaseDate) recordFields.releaseDate = releaseDate;
  if (format) recordFields.format = format;
  if (country) recordFields.country = country;
  if (coverFront) recordFields.coverFront = coverFront;
  if (coverBack) recordFields.coverBack = coverBack;
  if (coverLp) recordFields.coverLp = coverLp;
  if (condition) recordFields.condition = condition;
  if (barcode) recordFields.barcode = barcode;
  if (locationPrimary) recordFields.locationPrimary = locationPrimary;
  if (locationSecondary) recordFields.locationSecondary = locationSecondary;
  if (want) recordFields.want = want;
  if (have) recordFields.have = have;
  if (genre) recordFields.genre = genre;
  if (style) recordFields.style = style;

  try {
    let record = await Record.findById(req.params.id);

    if (!record) return res.status(404).json({ msg: 'Record not found' });

    //Make sure user owns record
    if (record.user.toString() != req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    record = await Record.findByIdAndUpdate(
      req.params.id,
      { $set: recordFields },
      { new: true }
    );

    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       Delete api/records:id
// @desc        Delete record
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let record = await Record.findById(req.params.id);

    if (!record) return res.status(404).json({ msg: 'Record not found' });

    //Make sure user owns record
    if (record.user.toString() != req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Record.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Record Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
