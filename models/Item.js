const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  itemId: {
    type: String,
  },
  code: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = Item = mongoose.model("elements", ItemSchema);
