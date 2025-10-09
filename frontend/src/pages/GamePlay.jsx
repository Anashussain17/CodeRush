
// src/pages/GamePlay.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "../data/Questions";

export default function GamePlay() {
  const navigate = useNavigate();
  const { level } = useParams();
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(() => {
    if (level === "beginner") return 10;
    if (level === "intermediate") return 15;
    if (level === "pro") return 30;
    return 0;
  });
  const [gameOver, setGameOver] = useState(false);

  const qList = questions[level];
  const question = qList[currentQ];


  // set timer depending on level
  useEffect(() => {
    if (level === "beginner") setTime(10);
    else if (level === "intermediate") setTime(15);
    else if (level === "pro") setTime(30);
  }, [level, currentQ]);

  // countdown effect
  useEffect(() => {
    if (gameOver || time <= 0) return;

    const timerId = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setGameOver(true);
          navigate("/game-over", { state: { score, level } });
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, gameOver]);

  const handleSubmit = () => {
    if (!question || gameOver) return;

    let isCorrect = false;

    if (level === "beginner") {
      isCorrect = answer === question.answer;
    } else if (level === "intermediate") {
      isCorrect = answer.trim() === question.answer.trim();
    } if (level === "pro") {
  try {
    // Wrap the user’s function code and return the function itself
    const wrappedCode = `
      ${answer}
      return typeof ${question.funcName} === "function" ? ${question.funcName} : null;
    `;

    // Create the function safely
    const userFunc = new Function(wrappedCode)();
    console.log("userFunc:", userFunc);
console.log("typeof userFunc:", typeof userFunc);
console.log("Testcases:", question.testcases);


    if (typeof userFunc !== "function") {
      throw new Error("Invalid function definition");
    }

    // Run all testcases and compare results
    const allPass = question.testcases.every(tc => {
      const result = userFunc(...tc.args);
      return JSON.stringify(result) === JSON.stringify(tc.expected);
    });

    isCorrect = allPass;
  } catch (err) {
    console.error("Pro evaluation error:", err);
    isCorrect = false;
  }
}




    if (isCorrect) {
      setScore((prev) => prev + 5 + time);
      setFeedback("✅ Correct!");
      setTimeout(() => {
        setFeedback("")
        if (currentQ + 1 < qList.length) {
          setCurrentQ((prev) => prev + 1);
          setAnswer("");
        } else {
          // Completed all questions -> redirect
          navigate("/level-complete", { state: { score, level } });
        }
      }, 1000);
    } else {
      setFeedback("Wrong Answer❌")
      setTimeout(() => {
        navigate("/game-over", { state: { score, level } });
      }, 1000);
    }
  };

  return (
    <div className="homepage-bg d-flex justify-content-center align-items-center vh-100">
      <div
        className="card bg-dark text-white shadow-lg p-4"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <h2 className="text-center mb-3">
          Level:{" "}
          <span
            className={
              level === "beginner"
                ? "text-success text-capitalize"
                : level === "intermediate"
                ? "text-primary text-capitalize"
                : "text-danger text-capitalize"
            }
          >
            {level}
          </span>
        </h2>
        <div className="d-flex flex-row mb-2">
          <div className="fw-bold w-50 text-start text-warning">
            Score: {score}
          </div>
          <div className="fw-bold w-50 text-end text-danger">Time: {time}</div>
        </div>

        {gameOver ? (
          <div className="alert alert-info text-center">
            ⏳ Game Over! Final Score: {score}
          </div>
        ) : (
          question && (
            <>
              {question.code && (
                <pre className="bg-black text-start text-success p-3 rounded">
                  {question.code}
                </pre>
              )}
              {question.question && <p>{question.question}</p>}

              {level === "beginner" && (
                <div className="row">
                  {question.options.map((opt, i) => (
                    <div className="col-6" key={i}>
                      <button
                        className={`btn w-100 m-2 ${
                          answer === opt
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        }`}
                        onClick={() => setAnswer(opt)}
                      >
                        {opt}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {level === "intermediate" && (
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Fill in the blank"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              )}

              {level === "pro" && (
                <textarea
                  className="form-control my-3"
                  rows="5"
                  placeholder="Write your function here"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              )}

              <div className="mt-3">
                <button className="btn btn-beg w-50" onClick={handleSubmit}>
                  Submit
                </button>
              </div>

              {feedback && (
                <div
                  className={`alert mt-3 ${
                    feedback.includes("Correct")
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {feedback}
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
}
