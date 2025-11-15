import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [user, setUser] = useState({ name: "John" });

  const maxStepCount = messages.length;

  function handleNext() {
    if (step < maxStepCount) setStep((prevStep) => prevStep + 1);
    // setUser((preUser) => ({ ...preUser, name: "josh" }));
  }

  function handlePrevious() {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {isOpen ? "x" : "o"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{messages[step - 1]}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
