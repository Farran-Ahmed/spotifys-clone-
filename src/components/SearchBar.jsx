import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="what do you want to listen to"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>You typed: {searchTerm}</p>
    </div>
  );
}

export default SearchBar;