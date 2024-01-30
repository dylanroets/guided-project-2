const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "swapi";
const collectionName = "films";
let collection;
async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collection = db.collection(collectionName);
}
startup();

// retrieve all films
module.exports.findAllFilms = function (callback) {
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((films) => callback(films));
};
