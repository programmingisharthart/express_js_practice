const express = require("express");
const app = express();
const _ = require("lodash");
require("dotenv").config();
const { PORT } = process.env;
const { products } = require("./data.js");
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  if (_.isEmpty(singleProduct)) {
    return res.status(404).send("Products is not available");
  }
  res.send(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({
      sucess: true,
      data: [],
    });
  }
  return res.send(sortedProducts);
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
