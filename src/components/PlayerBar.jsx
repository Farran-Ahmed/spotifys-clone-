function PlayerBar({ currentTrack }) {
  return (
    <div className="player-bar">
      {currentTrack ? (
        <div className="now-playing">
          <img src={currentTrack.artworkUrl100} alt={currentTrack.trackName} />
          <div>
            <p className="track-name">{currentTrack.trackName}</p>
            <p className="track-artist">{currentTrack.artistName}</p>
          </div>
        </div>
      ) : (
        <p>Nothing playing</p>
      )}
    </div>
  )
}

export default PlayerBar