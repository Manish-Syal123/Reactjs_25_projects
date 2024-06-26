import React, { useState } from "react";
import "./quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Ringgit", "Baht"],
    correctAnswer: "Yen",
  },
  {
    question: "Which programming language is also a gem?",
    options: ["Ruby", "Python", "Java", "C++"],
    correctAnswer: "Ruby",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
];

// states to manage:
//currentquestion
//score
//selectedOptions
//showresult
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelectedOption = (getOptionItem) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = getOptionItem; // like => [paris],[Mars],[],[]....questions.length
    setSelectedOptions(updatedSelectedOptions);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    //First to check if user have selected the option before movingforward
    if (selectedOptions[currentQuestion] === null) {
      alert(
        "Please select any one option before moving forward. You can always come back to change your answers."
      );
      return;
    }
    if (
      selectedOptions[currentQuestion] ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore((prevScore) => prevScore + 1); //or setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false);
  };
  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {!showResult ? (
        <div className="options-wrapper">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((optionItem) => (
              <button
                key={optionItem}
                onClick={() => handleSelectedOption(optionItem)}
                className={`option ${
                  selectedOptions[currentQuestion] === optionItem
                    ? "selected"
                    : ""
                }`}
              >
                {optionItem}
              </button>
            ))}
          </div>

          <div className="button-container">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="prev-btn"
            >
              Previous
            </button>
            <button onClick={handleNextQuestion} className="next-btn">
              {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <div className="show-result-wrapper">
          <h3>Quiz Completed</h3>
          <p>Your Score: {score}</p>
          <button onClick={handleRestartQuiz} className="restart-button">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
