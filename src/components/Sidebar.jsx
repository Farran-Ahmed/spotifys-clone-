import { useState } from 'react'
import { Home, Search, Heart, Clock, Sparkles } from 'lucide-react'

function Sidebar({ onHomeClick }) {
  const [activeLink, setActiveLink] = useState('home')

  const handleHomeClick = () => {
    setActiveLink('home')
    onHomeClick()
  }

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">my spotify clone</h2>

      <nav className="sidebar-nav">
        <button
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onClick={handleHomeClick}
        >
          <Home size={20} className="nav-icon" /> Home
        </button>
        <button
          className={`nav-link ${activeLink === 'search' ? 'active' : ''}`}
          onClick={() => setActiveLink('search')}
        >
          <Search size={20} className="nav-icon" /> Search
        </button>
      </nav>

      <div className="sidebar-library">
        <p className="library-heading">Your Library</p>

        <div className="library-item">
          <div className="library-thumb liked-songs">
            <Heart size={20} fill="white" color="white" />
          </div>
          <div className="library-text">
            <p className="library-title">Liked Songs</p>
            <p className="library-subtitle">Playlist</p>
          </div>
        </div>

        <div className="library-item">
          <div className="library-thumb">
            <Clock size={20} color="#b3b3b3" />
          </div>
          <div className="library-text">
            <p className="library-title">Recently Played</p>
            <p className="library-subtitle">Playlist</p>
          </div>
        </div>

        <div className="library-item">
          <div className="library-thumb">
            <Sparkles size={20} color="#b3b3b3" />
          </div>
          <div className="library-text">
            <p className="library-title">Made For You</p>
            <p className="library-subtitle">Playlist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar