// src/components/GamePlay.jsx
import { useState } from "react";
import questions from "../data/questions";
// import Timer from "./Timer"; // we’ll add soon

export default function GamePlay({ level = "beginner", onGameOver }) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  const currentQ = questions[level][currentQIndex];

  const handleSubmit = () => {
    if (!currentQ) return;

    let isCorrect = false;

    if (level === "beginner") {
      isCorrect = userAnswer === currentQ.correct;
    } else if (level === "intermediate") {
      isCorrect = userAnswer.trim() === currentQ.correct.trim();
    } else if (level === "pro") {
      isCorrect = userAnswer.includes(currentQ.correctKeyword);
    }

    if (isCorrect) {
      setScore((prev) => prev + 10);
    }

    if (currentQIndex + 1 < questions[level].length) {
      setCurrentQIndex((prev) => prev + 1);
      setUserAnswer("");
    } else {
      onGameOver?.(score + (isCorrect ? 10 : 0));
    }
  };

  return (
    <div className="shadow-lg rounded p-4">
      <h2 className="text-xl font-bold mb-2">Level: {level}</h2>
      <p className="mb-2">Score: {score}</p>
   

      {currentQ ? (
        <div>
          <pre className="bg-secondary text-white p-2 rounded mb-2 whitespace-pre-wrap">
            {currentQ.snippet}
          </pre>

          {level === "beginner" && (
            <div>
              {currentQ.choices.map((choice, idx) => (
                <button
                  key={idx}
                  className={`border p-2 m-1 rounded 
          ${
            userAnswer === choice
              ? "bg-success text-white" // Selected
              : "bg-white hover:bg-gray-200" // Not selected
          }`}
                  onClick={() => setUserAnswer(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          )}

          {level === "intermediate" && (
            <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Fill in the blank"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          )}

          {level === "pro" && (
            <textarea
              className="border p-2 w-full mb-2 h-24"
              placeholder="Write your function here"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          )}

          <button
            className="btn btn-primary px-4 py-2 rounded mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <p>No more questions.</p>
      )}
    </div>
  );
}
