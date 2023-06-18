const { readFileSync } = require("fs");
const http = require("http");
require("dotenv").config();

const homePage = readFileSync("./index.html");
const { PORT } = process.env;
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.end(homePage);

      break;
    case "/about":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.write("<h1>About page</h1>");
      res.end();
      break;
    default:
      res.writeHead(404, {
        "content-type": "text/html",
      });
      res.write("<h1>404 page not found</h1>");
      res.end();
      break;
  }
});

server.listen(PORT);
