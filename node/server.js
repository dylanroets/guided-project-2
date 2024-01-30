var express = require("express");
var mongo_dao = require("./mongo-dao");
var app = express();
app.use(express.json()); //Parse JSON body
// server start-up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);

//GET AllFilms
app.get("/films", (req, res) => {
  mongo_dao.findAllFilms((films) => {
    if (!films) {
      res.status(404).end();
    } else {
      res.send(films);
    }
  });
});

//GET One Film
app.get("/films/:id", (req, res) => {
  mongo_dao.findFilm(req.params.id, (film) => {
    if (!film) {
      res.status(404).end();
    } else {
      res.send(film);
    }
  });
});

//GET All characters in a Film
app.get("/films/:id/characters", (req, res) => {
  mongo_dao.findFilmCharacters(req.params.id, (characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});

//GET All planets in a Film
app.get("/films/:id/planets", (req, res) => {
  mongo_dao.findFilmPlanets(req.params.id, (planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      res.send(planets);
    }
  });
});

//GET AllPlanets
app.get("/planets", (req, res) => {
  mongo_dao.findAllPlanets((planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      res.send(planets);
    }
  });
});

//GET One Planet
app.get("/planets/:id", (req, res) => {
  mongo_dao.findPlanet(req.params.id, (planet) => {
    if (!planet) {
      res.status(404).end();
    } else {
      res.send(planet);
    }
  });
});

// //GET AllCharacters
app.get("/characters", (req, res) => {
  mongo_dao.findAllCharacters((characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});

//GET One character
app.get("/characters/:id", (req, res) => {
  mongo_dao.findCharacter(req.params.id, (character) => {
    if (!character) {
      res.status(404).end();
    } else {
      res.send(character);
    }
  });
});
