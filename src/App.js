import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

function App() {
  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = event.target;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // const [state, setState] = React.useState({
  //   base: [],
  //   players: [],
  // });

  // React.useEffect(() => {
  //   setState({
  //     players: ,
  //     base: ,
  //   });

  //   const handleChange = (e) => {
  //     const searchTerm = e.target.value;
  //     setState({
  //       ...state,
  //       players: state.base.filter((player) =>
  //         player.name.includes(searchTerm)
  //       ),
  //     });
  //   };
  // });

  return (
    <div>
      <Wrapper>
        <Header />
        <Search />
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;
