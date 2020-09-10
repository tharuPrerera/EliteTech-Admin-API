const express = require("express");
const laptopItem = require("../models/laptopItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let laptop = await laptopItem.find();
  res.send(laptop);
});



router.get("/:productId", async (req, res) => {
  let product = await laptopItem.findById(req.params.productId);
  if (!product) {
    return res
      .sendStatus(404)
      .send("The given id does not exist in our server...");
  }

  res.send(product);
});

router.post("/", async (req, res) => {
  if(!req.body.imgUrl &&
    !req.body.itemName &&
    !req.body.unitPrice &&
    !req.body.brand &&
    !req.body.code &&
    !req.body.warranty &&
    !req.body.quantity &&
    !req.body.stock
    ){
      return res.status(404).send("Not all mandotry values have been set !");
    }

    if (!req.body.imgUrl) {
      return res.status(404).send("Image Url field cannot be blank, please fill it up...");
    }
  
    if (!req.body.itemName) {
      return res.status(404).send("Item Name field cannot be blank, please fill it up..");
    }
  
    if (!req.body.unitPrice) {
      return res.status(404).send("Unit Price field cannot be blank, please fill it up..");
    }
  
    if (!req.body.brand) {
      return res.status(404).send("Brand field cannot be blank, please fill it up..");
    }
  
    if (!req.body.code) {
      return res.status(404).send("Code field cannot be blank, please fill it up..");
    }
  
    if (!req.body.warranty) {
      return res.status(404).send("Warranty field cannot be blank, please fill it up..");
    }
  
    if (!req.body.quantity) {
      return res.status(404).send("Quantity field cannot be blank, please fill it up..");
    }
  
    if (!req.body.stock) {
      return res.status(404).send("Stock field cannot be blank, please fill it up..");
    }
    
  
  try {
    let productToBeAddedToDb = new laptopItem({
      imgUrl:req.body.imgUrl,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity,
      stock: req.body.stock
    });

    productToBeAddedToDb = await productToBeAddedToDb.save();
    res.status(200).send({message:"Product added successfully", productToBeAddedToDb});
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.put("/:productId", async (req, res) => {
  if(!req.body.imgUrl &&
    !req.body.itemName &&
    !req.body.unitPrice &&
    !req.body.brand &&
    !req.body.code &&
    !req.body.warranty &&
    !req.body.quantity &&
    !req.body.stock
    ){
      return res.status(404).send("Not all mandotry values have been set !");
    }

    if (!req.body.imgUrl) {
      return res.status(404).send("Image Url field cannot be blank, please fill it up...");
    }
  
    if (!req.body.itemName) {
      return res.status(404).send("Item Name field cannot be blank, please fill it up..");
    }
  
    if (!req.body.unitPrice) {
      return res.status(404).send("Unit Price field cannot be blank, please fill it up..");
    }
  
    if (!req.body.brand) {
      return res.status(404).send("Brand field cannot be blank, please fill it up..");
    }
  
    if (!req.body.code) {
      return res.status(404).send("Code field cannot be blank, please fill it up..");
    }
  
    if (!req.body.warranty) {
      return res.status(404).send("Warranty field cannot be blank, please fill it up..");
    }
  
    if (!req.body.quantity) {
      return res.status(404).send("Quantity field cannot be blank, please fill it up..");
    }
  
    if (!req.body.stock) {
      return res.status(404).send("Stock field cannot be blank, please fill it up..");
    }
    
  
  let product = await laptopItem.findOneAndUpdate(
    { _id: req.params.productId },
    { $set: { 
      imgUrl:req.body.imgUrl,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity,
      stock: req.body.stock
             } },
    { new: true, useFindAndModify: false }
  );
  res.status(200).send({message:"Product updated successfully",product});
});

router.delete("/:productId", async (req, res) => {
  let product = await laptopItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  else{
    res.status(200).send({message:"Record has been Deleted..!!", product});
  }
});

module.exports = router;
