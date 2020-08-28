import React from "react";
import Table from "./Table";


const style = {
  textAlign: "center",
  display: "block",
  margin: "0 auto",
};

function Search() {
 state = {result: {}, search: ""}

// When this component mounts, search the Giphy API for pictures of Movies
  componentDidMount() {
    this.searchPlayers("");
  };
  
  searchPlayers = (query) => {
    players.json
      .search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchPlayers(this.state.search);
  };

  return (
    <div className="search" style={style}>
      <h3>Search for a player here!</h3>
      <input
        placeholder="search here"
        className="user-type"
        style={style}
        value = {this.state.search}
        handleInputChange = {this.handleInputChange}
        handleFormSubmit = {this.handleFormSubmit}
        
      ></input>
    </div>
  );
}

export default Search;
