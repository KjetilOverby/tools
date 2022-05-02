const mongoose = require("mongoose");

const ToolwasteSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  antall: {
    type: Number,
  },
  input: {
    type: Number,
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports =
  mongoose.models.Toolwaste || mongoose.model("Toolwaste", ToolwasteSchema);
