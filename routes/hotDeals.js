const express = require("express");
const hotDealsItem = require("../models/hotDealsItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let hotDeals = await hotDealsItem.find();
  res.send(hotDeals);
});

router.get("/:productId", async (req, res) => {
  let product = await hotDealsItem.findById(req.params.productId);
  if (!product) {
    return res
      .sendStatus(400)
      .send("The given id does not exist on our server...");
  }

  res.send(product);
});

router.post("/", async (req, res) => {
  if (!req.body.itemName) {
    return res.status(400).send("Not all mandetory values have been set");
  }
  try {
    let productToBeAddedToDb = new hotDealsItem({
      imgUrl:req.body.imgUrl,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity,
    });

    productToBeAddedToDb = await productToBeAddedToDb.save();
    res.send(productToBeAddedToDb);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.put("/:productId", async (req, res) => {
  let product = await hotDealsItem.findOneAndUpdate(
    { _id: req.params.productId },
    { $set: { 
      imgUrl:req.body.imgUrl,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity
             } },
    { new: true, useFindAndModify: false }
  );
  res.send(product);
});

router.delete("/:productId", async (req, res) => {
  let product = await hotDealsItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  res.send({product:"Record has been Deleted..!!"});
});

module.exports = router;
