import { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="what do you want to listen to"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
