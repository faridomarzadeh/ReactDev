import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  // function decrementCount() {
  //   setCount((count) => count - step);
  // }

  // function IncrementCount() {
  //   setCount((count) => count + step);
  // }

  // function IncrementStep() {
  //   setStep((step) => step + 1);
  // }

  // function decrementStep() {
  //   setStep((step) => step - 1);
  // }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <input
          type="range"
          min={0}
          max={10}
          onChange={(evnt) => {
            setStep(+evnt.target.value);
          }}
          value={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((prevCount) => (prevCount -= step));
          }}
        >
          -
        </button>
        <input type="number" value={count} />
        <button
          onClick={() => {
            setCount((prevCount) => (prevCount += step));
          }}
        >
          +
        </button>
      </div>
      {/* <Counter
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
      /> */}

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
          {Math.abs(dayCount)} days from today is {date.toDateString()}
        </p>
      )}
      {dayCount < 0 && (
        <p>
          {Math.abs(dayCount)} days ago was {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
