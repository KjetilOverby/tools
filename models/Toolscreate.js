const mongoose = require("mongoose");

const ToolcreateSchema = new mongoose.Schema({
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
  mongoose.models.Toolcreate || mongoose.model("Toolcreate", ToolcreateSchema);
