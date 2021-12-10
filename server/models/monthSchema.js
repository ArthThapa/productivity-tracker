const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  googleId: String,
  date: Date,
  goal: String,
  unit: String,
  expected_targets: [{type: Number, default: 0}, {type: Number, default: 0}, {type: Number, default: 0}, {type: Number, default: 0}],
  achieved_targets: [{type: Number, default: 0}, {type: Number, default: 0}, {type: Number, default: 0}, {type: Number, default: 0}],  //List Index reperesents Week number
  finished: Boolean
});

// module.exports = monthSchema;
