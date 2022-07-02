const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Products = require("../models/productModel");
const productsSample = require("../data/itemsData.js");
const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    console.log(products);
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});
productsRouter.get("/seed", async (req, res) => {
  try {
    const createProducts = await Products.insertMany(productsSample.Data);
    console.log(createProducts);
    res.send({ createProducts });
  } catch (err) {
    console.log(err);
  }
});

productsRouter.get("/:id", async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

module.exports = productsRouter;
