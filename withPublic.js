const express = require("express");
require("dotenv").config();
const path = require("path");
const { PORT } = process.env;
const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(PORT, () => {
  console.log(`Application is listening to port ${PORT}`);
});
