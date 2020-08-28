import React from "react";

const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 190,
  },
};

function Table({ results }) {
  return (
    <div style={tableStyle}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Height</th>
            <th scope="col">Hometown</th>
            <th scope="col">Club Team</th>
          </tr>
        </thead>
        <tbody>
          {results.map((player) => (
            <tr>
              <th scope="row">
                <img
                  src={player.image}
                  alt={player.name}
                  style={tableStyle.image}
                ></img>
              </th>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.birthdate}</td>
              <td>{player.height}</td>
              <td>{player.hometown}</td>
              <td>{player.club}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
