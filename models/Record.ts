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
  format: {
    type: String,
  },
  country: {
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
  recordCondition: {
    type: String,
  },
  sleeveCondition: {
    type: String,
  },
  barcode: {
    type: String,
  },
  locationPrimary: {
    type: String,
  },
  locationSecondary: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  want: {
    type: Number,
  },
  have: {
    type: Number,
  },
  genre: {
    type: Array,
  },
  style: {
    type: Array,
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
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model('record', RecordSchema);
