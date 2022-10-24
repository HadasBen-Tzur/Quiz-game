import React, { useState } from "react";
import "./Start.css";
import Quiz from "../Quiz/Quiz";

export default function Start() {
  const [data, setData] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = async () => {
    const { results: questions } = await (
      await fetch("https://opentdb.com/api.php?amount=10")
    ).json();

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
    return <Quiz questions={data} handleStart={handleStart} />;
  }
}
