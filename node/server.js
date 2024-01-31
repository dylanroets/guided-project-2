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
      const characters_array = characters.map(
        (character) => +character.character_id
      );
      mongo_dao.findCharactersByIds(characters_array, (characters_details) => {
        if (!characters_details) {
          res.status(404).end();
        } else {
          res.send(characters_details);
        }
      });
    }
  });
});

//GET All planets in a Film
app.get("/films/:id/planets", (req, res) => {
  mongo_dao.findFilmPlanets(req.params.id, (planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      const planets_array = planets.map((planet) => +planet.planet_id);
      mongo_dao.findPlanetsByIds(planets_array, (planets_details) => {
        if (!planets_details) {
          res.status(404).end();
        } else {
          res.send(planets_details);
        }
      });
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

//GET All Film a character was in
app.get("/characters/:id/films", (req, res) => {
  mongo_dao.findCharactersFilms(req.params.id, (films) => {
    if (!films) {
      res.status(404).end();
    } else {
      const films_array = films.map((film) => +film.film_id);
      mongo_dao.findFilmsByIds(films_array, (film_details) => {
        if (!film_details) {
          res.status(404).end();
        } else {
          res.send(film_details);
        }
      });
    }
  });
});

//GET All Films where a planet was in
app.get("/planets/:id/films", (req, res) => {
  mongo_dao.findPlanetFilms(req.params.id, (films) => {
    if (!films) {
      res.status(404).end();
    } else {
      const films_array = films.map((film) => +film.film_id);
      mongo_dao.findFilmsByIds(films_array, (film_details) => {
        if (!film_details) {
          res.status(404).end();
        } else {
          res.send(film_details);
        }
      });
    }
  });
});

//GET All the characters whose homeworld is id
app.get("/planets/:id/characters", (req, res) => {
  mongo_dao.findPlanetCharacters(req.params.id, (characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});
