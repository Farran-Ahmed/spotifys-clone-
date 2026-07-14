import { useRef, useState, useEffect } from 'react'

function PlayerBar({ currentTrack }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [currentTrack])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e) => {
    const newTime = e.target.value
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }


  return (
    <div className="player-bar">
      {currentTrack ? (
        <div className="now-playing">
          <img src={currentTrack.artworkUrl100} alt={currentTrack.trackName} />
          <div>
            <p className="track-name">{currentTrack.trackName}</p>
            <p className="track-artist">{currentTrack.artistName}</p>
          </div>
          <button onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>

          <span className='time'>{formatTime(currentTime)}</span>
          <input
            type="range" 
            min ='0'
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className='seekbar'
            />
            <span className="time">{formatTime(duration)}</span>

          <audio
            ref={audioRef}
            src={currentTrack.previewUrl}
            onEnded={() => setIsPlaying(false)}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e)=> setDuration(e.target.duration)}
          />
        </div>
      ) : (
        <p>Nothing playing</p>
      )}
    </div>
  )
}

export default PlayerBar