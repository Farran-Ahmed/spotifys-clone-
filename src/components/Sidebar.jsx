import { useState } from "react";

function Sidebar({ onHomeClick }) {
  return (
    <div className="sidebar">
      <h2>my spotify clone</h2>

      <nav className="sidebar-nav">
        <button className="nav-link" onClick={onHomeClick}>
          <span className="nav-icon">🏠</span> Home
        </button>
        <button className="nav-link">
          <span className="nav-icon">🔍</span> Search
        </button>
      </nav>

      <div className="sidebar-library">
        <p className="library-heading">Your Library</p>
        <ul className="library-list">
          <li>Liked Songs</li>
          <li>Recently Played</li>
          <li>Made For You</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar