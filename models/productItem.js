const mongoose = require("mongoose");

const productItemSchema = new mongoose.Schema({
      imgUrl: {
        type: String,
        required: [true, 'This field should not be empty'],
      },
      itemName: {
        type: String,
        minlength: 2,
        maxlength: 200,
        required: true,
      },
      unitPrice:{
        type: Number,
        required: true
      },
      brand: {
        type: String,
        required: true
      },
      code: {
        type: Number,
        required: true
      },
      warranty: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      stock: {
        type: String,
        required: true
      }
});

const ProductItem = mongoose.model("ProductItem" , productItemSchema);
module.exports = ProductItem;
