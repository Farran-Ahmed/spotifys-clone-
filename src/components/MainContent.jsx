

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";

function MainContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([])
      return
    }

    const timer = setTimeout(() => {
      fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=10`)
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch((err) => console.error("Fetch error:", err))
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])


  return (
    <div className="main-content">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Main Content</h2>
      <ul>
        {results.map((track) => (
          <li key={track.trackId}>
            {track.trackName} — {track.artistName}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default MainContent;
