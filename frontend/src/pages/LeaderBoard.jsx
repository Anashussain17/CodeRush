import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/leaderboard")
      .then(res => setScores(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center homepage-bg">
      <div className="card bg-dark text-white shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center text-warning mb-4">🏆 Leaderboard</h2>
        <ol className="list-group list-group-numbered">
          {scores.map((s, idx) => (
            <li key={idx} className="list-group-item bg-dark text-white d-flex justify-content-between">
              <span>{s.name}</span>
              <span className="fw-bold text-success">{s.score}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
