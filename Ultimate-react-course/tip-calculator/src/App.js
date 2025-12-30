import { useEffect, useState } from "react";

const options = [
  { text: "Dissatisfied (0%)", value: 0 },
  { text: "It was okay (5%)", value: 5 },
  { text: "It was good (10%)", value: 10 },
  { text: "Absolutely amazing (20%)", value: 20 },
];
function App() {
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState([]);
  const averageTip =
    tips.length > 0
      ? tips.reduce((acc, curr) => acc + curr, 0) / tips.length
      : 0;
  const tipTotal = Math.round((bill * averageTip) / 100);
  console.log(tips);
  return (
    <div className="App">
      <Form bill={bill} setBill={setBill}>
        How much was the bill?
      </Form>
      <DropBox options={options} index={0} tips={tips} setTips={setTips}>
        how did you like the service?
      </DropBox>
      <DropBox options={options} index={1} tips={tips} setTips={setTips}>
        how did your friend like the service?
      </DropBox>
      <Display bill={bill} tipTotal={tipTotal} />
    </div>
  );
}
function Display({ bill, tipTotal }) {
  return (
    <h3 style={{ fontWeight: "bold" }}>
      `You Pay ${bill + tipTotal} (${bill} + ${tipTotal})`
    </h3>
  );
}
function Form({ bill, setBill, children }) {
  return (
    <div>
      {children}
      <input
        type="text"
        value={bill}
        onChange={(evnt) => setBill(+evnt.target.value)}
      />
    </div>
  );
}

function DropBox({ options, index, tips, setTips, children }) {
  useEffect(() => {
    if (tips[index] === undefined)
      setTips((prevState) => [...prevState.slice(0, index), options[0].value]);
  }, []);
  return (
    <div>
      {children}
      <select
        value={tips[index]}
        onChange={(evnt) =>
          setTips((prevState) =>
            prevState.map((item, i) =>
              i === index ? +evnt.target.value : +item
            )
          )
        }
      >
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
}
export default App;
