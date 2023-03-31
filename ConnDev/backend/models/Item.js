const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Item = mongoose.model(
  "Item",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      contact: {
        type: Number,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      avaliable: {
        type: Boolean,
      },
      user: Object,
      taker: Object,
    },
    { timestamps: true }
  )
);

module.exports = Item;
