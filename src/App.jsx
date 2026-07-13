import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import "./App.css";
import PlayerBar from "./components/PlayerBar.jsx";

//That syntax   <Sidebar /> is how you "use" a component once it's imported
function App() {
  return (
    <div className="app">
      <div className="top-row">
        <Sidebar />
        <MainContent />
      </div>
      <PlayerBar />
    </div>
  );
}

export default App;
