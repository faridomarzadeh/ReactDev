import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[name,setName] = useState("")
  const [person,setPerson] = useState(null)

  const fetchData = () =>{
    fetch(`https://api.agify.io/?name=${name}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setPerson(data)
    })
  }
  return (
    <div className="App">
      <input placeholder='Type the Name'
      onChange={(event) =>setName(event.target.value)}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {person?.name}</h1>
      <h1>Predicted Age: {person?.age}</h1>
      <h1>Count: {person?.count}</h1>
    </div>
  );
}

export default App;
