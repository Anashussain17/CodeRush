
import {Routes,Route} from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect,useRef } from "react"
import './App.css'
import LevelSelection from './pages/LevelSelection'
import HomePage from './pages/HomePage'
import GamePlay from './pages/GamePlay'
import GameOver from "./pages/GameOver"
import LevelComplete from "./pages/LevelComplete"
import Leaderboard from "./pages/LeaderBoard"
import HowToPlay from "./pages/HowToPlay"
function AudioManager() {
  const location = useLocation();
  const gameMusicRef = useRef(null);
  const effectMusicRef = useRef(null);

  useEffect(() => {
    if (!gameMusicRef.current) {
      gameMusicRef.current = new Audio("/sounds/gameMusic.mp3");
      gameMusicRef.current.loop = true;
    }

    // Stop any effect sound when switching
    if (effectMusicRef.current) {
      effectMusicRef.current.pause();
      effectMusicRef.current.currentTime = 0;
    }

    // Pages where background game music should STOP
    if (location.pathname === "/game-over" || location.pathname === "/level-complete") {
      gameMusicRef.current.pause();

      if (location.pathname === "/game-over") {
        effectMusicRef.current = new Audio("/sounds/gameOver.mp3");
        effectMusicRef.current.play();
      }
      if (location.pathname === "/level-complete") {
        effectMusicRef.current = new Audio("/sounds/levelComplete.mp3");
        effectMusicRef.current.play();
      }
    } else {
      // Everywhere else → Play background game music
      gameMusicRef.current.play().catch(err => {
        console.log("Autoplay blocked until user interacts:", err);
      });
    }
  }, [location]);

  return null; // doesn’t render anything
}

function App() {


  return (
    <>
    <AudioManager/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
         <Route path="/levels" element={<LevelSelection />} />
        <Route path="/play/:level" element={<GamePlay />} />
        <Route path="/game-over" element={<GameOver/>}/>
        <Route path="/level-complete" element={<LevelComplete/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/howtoplay" element={<HowToPlay/>}/>
    </Routes>
    
    </>
  )
}

export default App
