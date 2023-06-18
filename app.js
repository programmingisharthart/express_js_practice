const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
// const morgan = require("morgan");
const auth = require("./routes/auth.js");
const people = require("./routes/people.js");
//static assets
app.use(express.static("./public"));
//parse form data

// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );

app.use(express.json());
app.use("/login", auth);
app.use("/api/people", people);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
