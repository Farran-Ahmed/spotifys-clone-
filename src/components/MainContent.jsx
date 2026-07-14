import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";

function MainContent({ setCurrentTrack, searchTerm, setSearchTerm }) {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [featuredTracks, setFeaturedTracks] = useState([])

  // Runs once, when the component first loads
  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=weeknd&media=music&limit=10`)
      .then((res) => res.json())
      .then((data) => setFeaturedTracks(data.results))
      .catch((err) => console.error("Featured fetch error:", err))
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    const timer = setTimeout(() => {
      fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=10`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.results)
          setIsLoading(false)
        })
        .catch((err) => {
          console.error("Fetch error:", err)
          setIsLoading(false)
        })
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const isSearching = searchTerm.trim() !== ""
  const trackList = isSearching ? results : featuredTracks

  return (
    <div className="main-content">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>
        {isSearching ? `Results for "${searchTerm}"` : "Popular right now"}
      </h2>

      {isLoading && <p className="status-message">Searching...</p>}

      {!isLoading && isSearching && results.length === 0 && (
        <p className="status-message">No results found for "{searchTerm}"</p>
      )}

      <div className="results-grid">
        {trackList.map((track) => (
          <div
            className="track-card"
            key={track.trackId}
            onClick={() => setCurrentTrack(track)}
          >
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