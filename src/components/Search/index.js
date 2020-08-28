import React, { useState } from "react";
import players from "../Table/players.json";

const style = {
  textAlign: "center",
  display: "block",
  margin: "0 auto",
};

function Search({ setResults }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setResults(players);
    } else {
      var filteredPlayers = players.filter((player) => {
        return player.name.toLowerCase().includes(search);
      });
      console.log(filteredPlayers);
      setResults(filteredPlayers);
    }
  };

  return (
    <div className="search" style={style}>
      <h3>Search for a player here!</h3>
      <input
        placeholder="search here"
        className="user-type"
        style={style}
        value={search}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default Search;
