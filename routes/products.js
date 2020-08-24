const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  let products = await Product.find();
  res.send(products);
});

router.get("/:productId", async (req, res) => {
  let product = await Product.findById(req.params.productId);
  if (!product) {
    return res
      .sendStatus(400)
      .send("The given id does not exist on our server...");
  }

  res.send(product);
});

router.post("/", async (req, res) => {
  if (!req.body.productName) {
    return res.status(400).send("Not all mandetory values have been set");
  }
  try {
    let productToBeAddedToDb = new Product({
      itemName: req.body.productName,
      itemPrice: req.body.itemPrice,
    });

    productToBeAddedToDb = await productToBeAddedToDb.save();
    res.send(productToBeAddedToDb);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.put("/:productId", async (req, res) => {
  let product = await Product.findOneAndUpdate(
    { _id: req.params.productId },
    { $set: { itemPrice: req.body.itemPrice } },
    { new: true, useFindAndModify: false }
  );
  res.send(product);
});

router.delete("/:productId", async (req, res) => {
  let product = await Product.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }

  res.send(product);
});

module.exports = router;
