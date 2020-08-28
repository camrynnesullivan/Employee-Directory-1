import React, { useState } from "react";
import players from "../Table/players.json";

const style = {
  textAlign: "center",
  display: "block",
  margin: "0 auto",
};

function Search({ setResults }) {
  //state = {result: {}, search: ""}
  const [search, setSearch] = useState("");

  // searchPlayers = (query) => {
  //   players.json
  //     .search(query)
  //     .then((res) => this.setState({ result: res.data }))
  //     .catch((err) => console.log(err));
  // };

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //You will search the players.json data using the search state variable

    //use setREsults to save the returned players as results
    //this.searchPlayers(this.state.search);
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
        onSubmit={handleFormSubmit}
      ></input>
    </div>
  );
}

export default Search;
