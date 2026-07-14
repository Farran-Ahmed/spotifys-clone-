import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import { useState } from 'react'
import "./App.css";
import PlayerBar from "./components/PlayerBar.jsx";

//That syntax   <Sidebar /> is how you "use" a component once it's imported
function App() {
  const [currentTrack, setCurrentTrack] = useState(null)


  return (
    <div className="app">
      <div className="top-row">
        <Sidebar />
        <MainContent setCurrentTrack= {setCurrentTrack}/>
      </div>
      <PlayerBar currentTrack ={currentTrack} />
    </div>
  );
}

export default App;
