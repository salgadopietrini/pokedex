import React, { useState } from "react";
import "../../general.css";
import "./search-bar.css";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    props.changePokemon(input);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="sb-container">
      <div>
        <input
          placeholder="enter pokemon name"
          onChange={handleChange}
          value={input}
          className="search-bar"
          required
        />
      </div>
      <div>
        <button onClick={handleClick} className="submit-button ">
          Search!
        </button>
      </div>
    </div>
  );
}
