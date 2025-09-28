
import {Routes,Route} from "react-router-dom"

import './App.css'
import LevelSelection from './pages/LevelSelection'
import HomePage from './pages/HomePage'
import GamePlay from './pages/GamePlay'
import GameOver from "./pages/GameOver"
import LevelComplete from "./pages/LevelComplete"
import Leaderboard from "./pages/LeaderBoard"
import HowToPlay from "./pages/HowToPlay"
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
         <Route path="/levels" element={<LevelSelection />} />
        <Route path="/play/:level" element={<GamePlay />} />
        <Route path="/game-over" element={<GameOver/>}/>
        <Route path="/level-complete" element={<LevelComplete/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/howtoplay" element={<HowToPlay/>}/>
    </Routes>
    
   
{/* <LevelSelection/> */}
    </>
  )
}

export default App
