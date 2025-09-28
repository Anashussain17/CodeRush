import React from "react";
import "../App.css"; // or create LevelSelection.css
import {useNavigate} from "react-router-dom"
function LevelSelection() {
    const navigate=useNavigate()
  return (
    <>
   
    <div className="homepage-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-dark rounded text-center p-5">
        <h2 className="level-title mb-5">Choose Level</h2>
        <div className="d-flex flex-column gap-3">
          <button className="btn-beg" onClick={() => navigate("/play/beginner")}>Beginner</button>
          <button className="btn-int" onClick={() => navigate("/play/intermediate")}>Intermediate</button>
          <button className="btn-pro" onClick={() => navigate("/play/pro")}>Pro</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LevelSelection;
