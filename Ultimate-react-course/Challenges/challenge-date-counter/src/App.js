import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  function decrementCount() {
    setCount((count) => count - step);
  }

  function IncrementCount() {
    setCount((count) => count + step);
  }

  function IncrementStep() {
    setStep((step) => step + 1);
  }

  function decrementStep() {
    setStep((step) => step - 1);
  }
  return (
    <div>
      <Counter
        decrement={decrementCount}
        increment={IncrementCount}
        label={"Count"}
        value={count}
      />

      <Counter
        decrement={decrementStep}
        increment={IncrementStep}
        label={"Step"}
        value={step}
      />

      <ShowDate dayCount={count} />
    </div>
  );
}

function Counter({ decrement, increment, label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={decrement} style={{ height: "30px" }}>
        -
      </button>
      <p style={{ padding: "0 10px" }}>
        {label}: {value}
      </p>
      <button onClick={increment} style={{ height: "30px" }}>
        +
      </button>
    </div>
  );
}

function ShowDate({ dayCount }) {
  var date = new Date();
  date.setDate(date.getDate() + dayCount);

  return (
    <div>
      {dayCount == 0 && <p>{date.toDateString()}</p>}
      {dayCount > 0 && (
        <p>
          {Math.abs(dayCount)} from today is {date.toDateString()}
        </p>
      )}
      {dayCount < 0 && (
        <p>
          {Math.abs(dayCount)} from today was {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
