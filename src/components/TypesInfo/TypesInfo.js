import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Link } from "react-router-dom";
import axios from "axios";
import "./types-info.css";
import "../../general.css";

export default function TypesInfo() {
  const [show, setShow] = useState(false);
  const [selector, setSelector] = useState("1");
  const [typeInfo, setTypeInfo] = useState([]);
  const [typeName] = useState([
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy",
  ]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/${selector}`).then((response) =>
      setTypeInfo({
        pokemons: response.data.pokemon,
      })
    );
  }, [selector]);

  const handleSelector = (event) => {
    setSelector(event.target.value);
    setShow(true);
  };

  return (
    <div className="types-info">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button className="submit-button2">Go back to pokedex!</button>
      </Link>
      <h1>Selected type: {typeName[parseInt(selector) - 1]}</h1>
      <div class="ti-buttons">
        <button onClick={handleSelector} value="1">
          Normal
        </button>
        <button onClick={handleSelector} value="2">
          Fighting
        </button>
        <button onClick={handleSelector} value="3">
          Flying
        </button>
        <button onClick={handleSelector} value="4">
          Poison
        </button>
        <button onClick={handleSelector} value="5">
          Ground
        </button>
        <button onClick={handleSelector} value="6">
          Rock
        </button>
        <button onClick={handleSelector} value="7">
          Bug
        </button>
        <button onClick={handleSelector} value="8">
          Ghost
        </button>
        <button onClick={handleSelector} value="9">
          Steel
        </button>
        <button onClick={handleSelector} value="10">
          Fire
        </button>
        <button onClick={handleSelector} value="11">
          Water
        </button>
        <button onClick={handleSelector} value="12">
          Grass
        </button>
        <button onClick={handleSelector} value="13">
          Electric
        </button>
        <button onClick={handleSelector} value="14">
          Psychic
        </button>
        <button onClick={handleSelector} value="15">
          Ice
        </button>
        <button onClick={handleSelector} value="16">
          Dragon
        </button>
        <button onClick={handleSelector} value="17">
          Dark
        </button>
        <button onClick={handleSelector} value="18">
          Fairy
        </button>
      </div>
      <div className="ti-pokemons">
        {show
          ? typeInfo.pokemons.map((elem) => (
              <PokemonCard name={elem.pokemon.name} key={elem.pokemon.name} />
            ))
          : null}
      </div>
    </div>
  );
}
