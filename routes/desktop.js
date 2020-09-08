const express = require("express");
const desktopItem = require("../models/desktopItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let desktop = await desktopItem.find();
  res.send(desktop);
});

router.get("/:productId", async (req, res) => {
  let product = await desktopItem.findById(req.params.productId);
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
    return res.status(404).send("Image Url cannot be blank.");
  }

  if (!req.body.itemName) {
    return res.status(404).send("Item Name cannot be blank.");
  }

  if (!req.body.unitPrice) {
    return res.status(404).send("Unit Price cannot be blank.");
  }

  if (!req.body.brand) {
    return res.status(404).send("Brand cannot be blank.");
  }

  if (!req.body.code) {
    return res.status(404).send("Code cannot be blank.");
  }

  if (!req.body.warranty) {
    return res.status(404).send("Warranty cannot be blank.");
  }

  if (!req.body.quantity) {
    return res.status(404).send("Quantity cannot be blank.");
  }

  if (!req.body.stock) {
    return res.status(404).send("Stock cannot be blank.");
  }

  try {
    let productToBeAddedToDb = new desktopItem({
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
    return res.status(404).send("Image Url cannot be blank.");
  }

  if (!req.body.itemName) {
    return res.status(404).send("Item Name cannot be blank.");
  }

  if (!req.body.unitPrice) {
    return res.status(404).send("Unit Price cannot be blank.");
  }

  if (!req.body.brand) {
    return res.status(404).send("Brand cannot be blank.");
  }

  if (!req.body.code) {
    return res.status(404).send("Code cannot be blank.");
  }

  if (!req.body.warranty) {
    return res.status(404).send("Warranty cannot be blank.");
  }

  if (!req.body.quantity) {
    return res.status(404).send("Quantity cannot be blank.");
  }

  if (!req.body.stock) {
    return res.status(404).send("Stock cannot be blank.");
  }

  let product = await desktopItem.findOneAndUpdate(
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
  let product = await desktopItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  res.status(200).send({message:"Record has been Deleted..!!", product});
});

module.exports = router;
