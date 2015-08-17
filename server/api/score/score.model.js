'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  name: String,
  score: Number,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Score', ScoreSchema);
