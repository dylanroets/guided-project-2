import React from "react";
import { useState, useEffect } from "react";

const url = new URL("http://localhost:4000/characters");

function Accessories() {
  const [characters, setCharacters] = useState([]);
  const getCharacters = function async() {
    fetch(url)
      .then(async (response) => await response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="page">
      {characters.map((character) => {
        return <div key={character.id}> {character.name}</div>;
      })}
      ;
    </div>
  );
}
export default Accessories;
