const express = require("express");
const app = express();
const _ = require("lodash");
const { logger } = require("./middleware/logger");
const { authorize } = require("./middleware/authorize");
require("dotenv").config();
const { PORT } = process.env;

const morgan = require("morgan");

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize])
// app.use(express.static('./public))
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", [logger], (req, res) => {
  res.send("About page");
});

app.get("*", (req, res) => {
  res.send("Not found page");
});
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
