const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  label: {
    type: String,
  },
  catalogNumber: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  recordCondition: {
    type: String,
  },
  sleeveCondition: {
    type: String,
  },
  country: {
    type: String,
  },
  locationPrimary: {
    type: String,
  },
  locationSecondary: {
    type: String,
  },
  barcode: {
    type: String,
  },
  coverFront: {
    type: String,
  },
  coverBack: {
    type: String,
  },
  coverLp: {
    type: String,
  },
  genre: {
    type: Array,
  },
  style: {
    type: Array,
  },
  comment: {
    type: String,
  },
  rating: {
    type: Number,
  },
  cover: {
    type: Boolean,
  },
  innerSleeve: {
    type: Boolean,
  },
  outerSleeve: {
    type: Boolean,
  },
  wishList: {
    type: Boolean,
  },
  want: {
    type: Number,
  },
  have: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  format: {
    type: String,
  },
});

module.exports = mongoose.model('record', RecordSchema);
