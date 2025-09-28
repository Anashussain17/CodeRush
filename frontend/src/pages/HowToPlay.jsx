// src/pages/HowToPlay.jsx
import { Link } from "react-router-dom";

export default function HowToPlay() {
  return (
    <div className="homepage-bg d-flex justify-content-center align-items-center vh-100">
      <div
        className="card bg-dark text-white shadow-lg p-4"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <h2 className="text-center text-info mb-4">📘 How To Play</h2>

        <div className="text-start">
          <h5 className="text-warning">🎮 Game Rules:</h5>
          <ul className="list-unstyled ">
            <li>✔ Choose your level: <b className="text-success">Beginner</b>, <b className="text-primary">Intermediate</b>, or <b className="text-danger">Pro</b>.</li>
            <li>✔ Each level has different types of coding questions.</li>
            <li>✔ You’ll earn <b>points</b> for correct answers + time bonus.</li>
            <li>✔ A single wrong answer ends the game ( <b className="text-warning">⚠</b> Game Over ).</li>
            <li>✔ Complete all questions to finish the level ✅.</li>
          </ul>

          <h5 className="text-warning mt-3">⏳ Timer:</h5>
          <ul className="list-unstyled">
            <li><b className="text-success">Beginner</b> → 10s per question</li>
            <li><b className="text-primary">Intermediate</b> → 15s per question</li>
            <li><b className="text-danger">Pro</b> → 30s per question</li>
          </ul>

          <h5 className="text-warning mt-3">🏆 Scoring:</h5>
          <ul className="list-unstyled">
            <li>+5 points for each correct answer</li>
            <li>+ Remaining time bonus ( faster = more points ! )</li>
          </ul>

          <p className="mt-3 text-info fst-italic">
            "The only way to learn a new programming language is by writing programs in it."
            – Dennis Ritchie
          </p>
        </div>

        <div className="mt-4 d-flex justify-content-center">
          <Link to="/" className="btn btn-outline-light mx-2">
            ⬅ Back to Menu
          </Link>
          <Link to="/levels" className="btn btn-success mx-2">
            🚀 Start Playing
          </Link>
        </div>
      </div>
    </div>
  );
}
