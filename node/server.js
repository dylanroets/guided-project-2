var express = require("express");
var dao = require("./mongo-dao");
var app = express();
app.use(express.json()); //Parse JSON body
// server start-up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);
// index.js GET AllFilms
app.get("/films", (req, res) => {
  dao.findAllFilms((films) => {
    if (!films) {
      res.status(404).end();
    } else {
      res.send(films);
    }
  });
});
