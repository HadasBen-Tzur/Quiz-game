import React, { useState } from "react";
import "./Start.css";
import Questions from "../Quiz/Quiz";

export default function Start() {
  const [data, setData] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = async () => {
    const fetchQuestion = async () => {
      const res = await fetch("https://opentdb.com/api.php?amount=10");
      const data = await res.json();
      return data.results;
    };

    const questions = await fetchQuestion();
    setData(questions);
    setHasStarted(true);
  };

  if (!hasStarted) {
    return (
      <div className="Srart">
        <div className="no-quizs">
          <h1>Quizzical</h1>
          <h3>Some description if needed</h3>
          <button className="first-quiz" onClick={handleStart}>
            Start quiz
          </button>
        </div>
      </div>
    );
  } else {
    return <Questions questions={data} handleStart={handleStart} />;
  }
}
