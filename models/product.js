const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    minlength: 2,
    maxlength: 70,
    required: true,
  },
  itemPrice: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;