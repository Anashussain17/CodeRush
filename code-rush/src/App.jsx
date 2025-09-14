// src/App.jsx
import GamePlay from "./components/GamePlay";

function App() {
  const handleGameOver = (finalScore) => {
    alert(`Game Over! Your score: ${finalScore}`);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🚀 CodeRush Prototype</h1>
      <GamePlay level="beginner" onGameOver={handleGameOver} />
    </div>
  );
}

export default App;
