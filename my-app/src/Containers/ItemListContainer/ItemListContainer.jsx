import React from "react";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function obtenerPokemones() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
        const data = await response.json();
        
        setPokemones(data.results);
        console.log(pokemones)
    }

    obtenerPokemones();
  }, []);

  return (
    <div className="container">
      <h1>Pokemones</h1>
      <ul>
        {pokemones.map((pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
};

export default ItemListContainer;
