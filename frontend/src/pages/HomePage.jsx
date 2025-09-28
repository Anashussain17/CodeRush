// import React from "react";
// import "../App.css";

// function HomePage() {
//   return (
//     <div className="home-container">
//       <h1 className="sparkle-text">CODE RUSH</h1>
//       <p className="subtitle">code. rush. conquer.</p>
      
//       <div className="button-container">
//         <button className="game-button">Start Game</button>
//         <button className="game-button">How to Play</button>
//         <button className="game-button">Leaderboard</button>
//         <button className="game-button">Settings</button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


import React from "react";
import "../App.css"; 
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
function HomePage() {
    const navigate=useNavigate()
  return (
    <div className="sparkle-background homepage-bg">
      <div>
        <h1 className="homepage-title">CODE RUSH</h1>
        <h5 className=" text-warning">JavaScript Edition</h5>
        <p className="homepage-subtitle">Solve · Code · Conquer </p>
        <div className="d-flex flex-column gap-3 align-items-center">
          <button className="btn-glow w-100" onClick={async()=>setTimeout(()=>{
            navigate("/levels")},1000)}>Start Game</button>
          <button className="btn btn-dark px-4 w-100" onClick={async()=>setTimeout(()=>{navigate("/howtoplay")},1000)} >How to Play</button>
          <button className="btn btn-dark px-4 w-100" onClick={async()=>setTimeout(()=>{navigate("/leaderboard")},1000)}>Leaderboard</button>
         
        </div>
      </div>
    </div>
  );
}

export default HomePage;