const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added:Date,
  published: Date,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

module.exports = mongoose.model("Data", dataSchema);
