const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Products = require("../models/productModel");
const productsSample = require("../data/itemsData.js");
const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  try {
    const pageOptions = {
      page: parseInt(req.query.page) - 1 || 0,
      limit: parseInt(req.query.limit) || 10,
    };
    const products = await Products.find()
      .sort({ dateCreated: 1, dateModified: -1 })
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();
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
