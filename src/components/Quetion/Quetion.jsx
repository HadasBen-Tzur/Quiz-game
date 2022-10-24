import React, { useState } from "react";
import Answer from "../answer/answer";
import { nanoid } from "nanoid";
import "./Quetion.css";
import Questions from "../Quiz/Quiz";

export default function Question({ question, setSelectAnswer, clickCheck }) {
  // function addAnswerHelp() {
  //   const help = [question.correct_answer, ...question.incorrect_answers];
  //   // help.push(question.correct_answer);
  //   // question.incorrect_answers.map((answer) => help.push(answer));
  //   return help;
  // }
  const addAnswer = [question.correct_answer, ...question.incorrect_answers];
  //console.log(addAnswer);

  function answerElement(answer) {
    return {
      value: answer,
      isClick: false,
      id: nanoid(),

      isCorrect: question.correct_answer === answer,
    };
  }

  function newListAnswerFunc() {
    const newList = [];
    for (let i = 0; i < addAnswer.length; i++) {
      newList.push(answerElement(addAnswer[i]));
    }
    return newList;
  }
  const newListAnswer = newListAnswerFunc();

  const [listAnswer, setListAnswer] = useState(newListAnswer);

  function chengeColer(id) {
    setListAnswer((list) => {
      return list.map((ans) => {
        if (ans.id === id) {
          setSelectAnswer((prev) => {
            // console.log(prev, "prev", "Quesion");
            return prev.map((select) => {
              if (select.id === question.question) {
                return {
                  ...select,
                  selectAnswer: ans.value,
                };
              }
              return select;
            });
          });
        }
        return ans.id === id
          ? { ...ans, isClick: !ans.isClick }
          : { ...ans, isClick: false };
      });
    });
  }
  const answerElements = listAnswer.map((answer) => (
    <Answer
      key={answer.id}
      value={answer.value}
      isClick={answer.isClick}
      chengeColer={() => chengeColer(answer.id)}
      isCorrect={answer.isCorrect}
      clickCheck={clickCheck}
    />
  ));

  return (
    <div key={question.question}>
      <h3>{question.question}</h3>
      <div>{answerElements}</div>
    </div>
  );
}
