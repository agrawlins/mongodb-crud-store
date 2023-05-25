const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Movie blueprint
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "food",
      "clothing",
      "electronics",
      "home",
      "toys",
      "hardware",
      "garden",
      "pharmacy",
      "office",
      "pets",
      "automotive",
      "crafts",
      "sporting",
    ],
    required: true,
  },
  quantity: {
    type: Number,
    maximumValue: 999,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
