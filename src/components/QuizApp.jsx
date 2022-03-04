import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function QuizApp() {
  const handelClick = (event) => {
    event.preventDefault();
  };
  const handelChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = useState("");
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.trivia.willfry.co.uk/questions?limit=5")
      .then((res) => {
        setQuiz(res.data);
      });
  }, []);
  return (
    <div className="Quiz-app">
      <h1 className="choice">Choose a Question:</h1>
      {quiz.map((item,index) => (
        <div key={index} onChange={handelChange}>
          <h1 className="category">{item.category}</h1>
          <p
            className="question"
            onClick={handelClick}
            value={value}
          >
            {item.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default QuizApp;
