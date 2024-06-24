import './App.css';
import { useToggle } from './useToggle';
import { useCounter } from './useCounter';
function App() {
  const {counter, increaseCount, decreaseCount, reset} = useCounter()
  const [isVisible, toggle] = useToggle(false)
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible?"Hide":"Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
      <div>{counter}</div>
      <button onClick={increaseCount}>Increase </button>
      <button onClick={decreaseCount}>Decrease </button>
      <button onClick={reset}>reset</button>
    </div>

  );
}

export default App;
