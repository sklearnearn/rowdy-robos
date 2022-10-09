import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [data, setData] = useState({ monsters: [] });
  const [searchField, setSearchField] = useState({ searchFieldValue: "" });
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData({ ...data.monsters, monsters: json });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  });

  const filteredMonsters = data.monsters.filter((val, i) => {
    return val.name
      .toLowerCase()
      .includes(searchField.searchFieldValue.toLowerCase());
  });

  return (
    <div className="App">
      <h1>ROWDY ROBOS</h1>
      <SearchBox
        handleChange={(e) =>
          setSearchField({ searchFieldValue: e.target.value })
        }
        placeholder="Search Robo"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
