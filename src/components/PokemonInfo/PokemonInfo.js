import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../general.css";
import "./pokemon-info.css";

export default function PokemonInfo(props) {
  const [pokemonInfo, setPokemonInfo] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemonName.toLowerCase()}`
      )
      .then(
        (response) => {
          response.data.name &&
            setPokemonInfo({
              name: response.data.name,
              number: response.data.id,
              species: response.data.species.name,
              image: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              attack: response.data.stats[1].base_stat,
              defense: response.data.stats[2].base_stat,
              speed: response.data.stats[5].base_stat,
              type: response.data.types[0].type.name,
            });
        },
        [props.pokemonName]
      );
  });

  return (
    <div className="pokemon-info">
      {props.pokemonName === "Not pokemon searched" ||
      props.pokemonName === undefined ||
      props.pokemonName === "" ? (
        "No pokemon searched"
      ) : pokemonInfo.name ? (
        <>
          <img alt="PokemonImage" src={pokemonInfo.image} width="200px"></img>
          <h1>{pokemonInfo.name}</h1>
          <div>Number: {pokemonInfo.number}</div>
          <div>Especie: {pokemonInfo.species}</div>
          <div>HP: {pokemonInfo.hp}</div>
          <div>Attack: {pokemonInfo.attack}</div>
          <div>Defense: {pokemonInfo.defense}</div>
          <div>Speed:{pokemonInfo.speed}</div>
          <div>Type: {pokemonInfo.type}</div>
        </>
      ) : (
        "Not a pokemon"
      )}
    </div>
  );
}
