const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "swapi";
const films_collectionName = "films";
let film_collection;
const films_characters_collectionName = "films_characters";
let films_characters_collection;
const films_planets_collectionName = "films_planets";
let films_planets_collection;
const planets_collectionName = "planets";
let planets_collection;
const characters_collectionName = "characters";
let characters_collection;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  film_collection = db.collection(films_collectionName);
  planets_collection = db.collection(planets_collectionName);
  characters_collection = db.collection(characters_collectionName);
  films_characters_collection = db.collection(films_characters_collectionName);
  films_planets_collection = db.collection(films_planets_collectionName);
}
startup();

// retrieve all films
module.exports.findAllFilms = function (callback) {
  let dataPromise = film_collection.find({}).toArray();
  dataPromise.then((films) => callback(films));
};

// retrieve one film
module.exports.findFilm = function (id, callback) {
  let dataPromise = film_collection.findOne({ id: +id });
  dataPromise.then((film) => callback(film));
};

// retrieve characters in film
module.exports.findFilmCharacters = function (id, callback) {
  let dataPromise = films_characters_collection
    .find({ film_id: +id })
    .toArray();
  dataPromise.then((characters) => callback(characters));
};

// retrieve planets in film
module.exports.findFilmPlanets = function (id, callback) {
  let dataPromise = films_planets_collection.find({ film_id: +id }).toArray();
  dataPromise.then((planets) => callback(planets));
};

// retrieve all planets
module.exports.findAllPlanets = function (callback) {
  let dataPromise = planets_collection.find({}).toArray();
  dataPromise.then((planets) => callback(planets));
};

// retrieve one planets
module.exports.findPlanet = function (id, callback) {
  let dataPromise = planets_collection.findOne({ id: +id });
  dataPromise.then((planet) => callback(planet));
};

// retrieve all Characters
module.exports.findAllCharacters = function (callback) {
  let dataPromise = characters_collection.find({}).toArray();
  dataPromise.then((characters) => callback(characters));
};

// retrieve one Character
module.exports.findCharacter = function (id, callback) {
  let dataPromise = characters_collection.findOne({ id: +id });
  dataPromise.then((character) => callback(character));
};
