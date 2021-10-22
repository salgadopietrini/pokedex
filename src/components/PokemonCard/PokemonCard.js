import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../general.css";
import "./pokemon-card.css";

export default function PokemonCard(props) {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then(
      (response) =>
        setInfo({
          name: response.data.name,
          number: response.data.id,
          species: response.data.species.name,
          image: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[5].base_stat,
          type: response.data.types[0].type.name,
        }),
      [props.name]
    );
  });

  return (
    <Link
      to={{
        pathname: "/",
        state: { name: props.name, selected: true },
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="pokemon-card">
        <img alt="PokemonImage" src={info.image} width="100px"></img>
        <div>{props.name}</div>
      </div>
    </Link>
  );
}
