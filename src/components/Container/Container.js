import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import { Link } from "react-router-dom";
import "./container.css";
import "../../general.css";

export default function Container(props) {
  const [pokemon, setPokemon] = useState("Not pokemon searched");

  const changePokemon = (pokemonName) => {
    setPokemon(pokemonName);
  };

  return (
    <div className="container">
      <Link to={"/typesInfo"} style={{ textDecoration: "none" }}>
        <button className="submit-button2">
          Checkout the pokemons per type!
        </button>
      </Link>
      <SearchBar changePokemon={changePokemon} />
      <PokemonInfo
        pokemonName={
          props.location.state &&
          props.location.state.selected &&
          pokemon === "Not pokemon searched"
            ? props.location.state.name
            : pokemon
        }
        key={
          props.location.state &&
          props.location.state.selected &&
          pokemon === "Not pokemon searched"
            ? props.location.state.name
            : pokemon
        }
      />
    </div>
  );
}
