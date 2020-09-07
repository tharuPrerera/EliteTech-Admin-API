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
        required: [true, 'Item name is required'],
      },
      unitPrice:{
        type: Number,
        required: [true, 'Price value should not be empty',]
      },
      brand: {
        type: String,
        required:[true, 'Brand name is required']
      },
      code: {
        type: Number,
        required: [true, 'Code should not be of string types'],
      },
      warranty: {
        type: String,
        required: [true, 'This field should not be empty'],
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity should not be of string type'],
      },
      stock: {
        type: String,
        required: [true, 'This field should not be empty'],
      }
});

const ProductItem = mongoose.model("ProductItem" , productItemSchema);
module.exports = ProductItem;
