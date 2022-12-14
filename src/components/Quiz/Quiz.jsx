import React, { useState } from "react";
import "./Quiz.css";
import Question from "../Quetion/Quetion";
import { useEffect } from "react";

export default function Questions({ questions, handleStart }) {
  const QuestionList = () => {
    const transform = ({ question, correct_answer }) => {
      return {
        id: question,
        corectAnswer: correct_answer,
        selectAnswer: null,
        isCorect: false,
      };
    };
    const [isShown, setIsShown] = useState(false);
    const [selectAnswer, setSelectAnswer] = useState(questions.map(transform));
    const [clickCheck, setClickCheck] = useState(false);

    function checkAnswer() {
      setIsShown(true);
      setClickCheck(true);
      setSelectAnswer((selectList) => {
        return selectList.map((answer) => {
          if (answer.corectAnswer == answer.selectAnswer) {
            return {
              ...answer,
              isCorect: true,
            };
          }
          return answer;
        });
      });
    }
    const correct = () => {
      let x = 0;
      selectAnswer.map((select) => {
        if (select.isCorect) {
          x = x + 1;
        }
      });
      return x;
    };
    console.log("setCorect", selectAnswer);
    return (
      <section>
        {questions.map((question) => (
          <Question
            key={question.question}
            question={question}
            setSelectAnswer={setSelectAnswer}
            clickCheck={clickCheck}
          />
        ))}
        <br />
        <button onClick={checkAnswer}>Check answers</button>
        <h5 style={{ display: isShown ? "block" : "none" }}>
          You scored {correct()}/10 correct answers
        </h5>
        <button
          style={{ display: isShown ? "block" : "none" }}
          onClick={handleStart}
        >
          Play again
        </button>
      </section>
    );
  };

  return (
    <div className="Quiz">
      <h1>Questions</h1>
      <QuestionList handleStart={handleStart} />
    </div>
  );
}
