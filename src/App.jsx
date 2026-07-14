import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import PlayerBar from './components/PlayerBar.jsx'

function App() {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="app">
      <div className="top-row">
        <Sidebar onHomeClick={() => setSearchTerm("")} />
        <MainContent
          setCurrentTrack={setCurrentTrack}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <PlayerBar currentTrack={currentTrack} />
    </div>
  )
}

export default App