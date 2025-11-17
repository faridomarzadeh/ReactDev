import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <FlashCard question={q.question} answer={q.answer} key={q.id} />
      ))}
    </div>
  );
}

function FlashCard({ question, answer }) {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  function handleClick() {
    setAnswerDisplayed((state) => !state);
  }

  return (
    <>
      {answerDisplayed ? (
        <div className="selected" onClick={handleClick}>
          {answer}
        </div>
      ) : (
        <div onClick={handleClick}>{question}</div>
      )}
    </>
  );
}
