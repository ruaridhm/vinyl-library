const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
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
  condition: {
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
});

module.exports = mongoose.model('record', RecordSchema);
