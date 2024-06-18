import './App.css';
import { useState } from 'react';

function App() {
  let [todoList, setTodoList] = useState([]);
  let [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }
  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName:input
    }
    setTodoList([...todoList,task])
    setInput("")
  }

  const deleteTask = (id)=> {
    setTodoList(todoList.filter((element)=>element.id!==id))
  }
  return (
    <div className="App">
      <div className="create-task">
        <input onChange={handleInputChange} value={input}/>
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="show-task">
        {todoList.map((task)=> {
          return <div className="show-task__item" key={task.id}>
            <h1>{task.taskName}</h1>
            <button onClick={()=>deleteTask(task.id)}>X</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
