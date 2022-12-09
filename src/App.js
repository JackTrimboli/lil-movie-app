import "./styles.css";
import { useState } from "react";

import MovieCardList from "./components/MovieCardList";

export default function App() {
  // STATE
  const [searchInput, setSearchInput] = useState("");
  const [searchProp, setSearchProp] = useState("");

  // FUNCTIONS
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // JSX
  return (
    <div className="App">
      <span className="search-bar">
        <input type="text" value={searchInput} onChange={handleInputChange} />
        <button
          onClick={() => {
            setSearchProp(searchInput);
          }}
        >
          Search
        </button>
      </span>
      <MovieCardList searchProp={searchProp} />
    </div>
  );
}
