import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import players from "./components/Table/players.json";

function App() {
  const [results, setResults] = useState(players);

  return (
    <div>
      <Wrapper>
        <Header />
        <Search setResults={setResults} />
        <Table results={results} />
      </Wrapper>
    </div>
  );
}

export default App;
