

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";

function MainContent({setCurrentTrack}) {
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
      <div className="results-grid">
        {results.map((track) => (
          <div className="track-card" key={track.trackId} onClick={() => setCurrentTrack(track)}>
            <img src={track.artworkUrl100} alt={track.trackName} />
            <p className="track-name">{track.trackName}</p>
            <p className="track-artist">{track.artistName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MainContent;