const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imgUrl: String,
  itemName: {
    type: String,
    minlength: 2,
    maxlength: 200,
    required: true,
  },
  unitPrice: Number,
  brand: {
    type: String,
    required: true,
  },
  code: String,
  warranty: String,
  quantity: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;