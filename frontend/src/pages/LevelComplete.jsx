// src/pages/LevelComplete.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LevelComplete() {
  const { state } = useLocation(); // gets { score, level }
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSave = async () => {
    if (!name) return alert("Enter your name!");
    try {
      await axios.post("http://localhost:5555/api/leaderboard", {
        name,
        score: state?.score || 0,
      });
      navigate("/leaderboard");
    } catch (err) {
      console.error(err);
      alert("Error saving score");
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center homepage-bg">
      <div className="card bg-dark text-white text-center p-5 shadow-lg" style={{ maxWidth: "600px" }}>
        <h1 className="text-success mb-3">🏆 Level Complete!</h1>
        <p className="mb-4">Amazing work! Your coding skills are on fire! 🔥</p>
        <h3 className="text-warning">Your Score: {state?.score || 0}</h3>

        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleSave}>
          Submit Score
        </button>
      </div>
    </div>
  );
}
