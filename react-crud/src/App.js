import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  let [todoList, setTodoList] = useState([]);
  let [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }
  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName:input,
      completed: false
    }
    setTodoList([...todoList,task])
    setInput("")
  }

  const deleteTask = (id)=> {
    setTodoList(todoList.filter((element)=>element.id!==id))
  }
  const completeTask = (task) => {
    todoList.map((element)=> {
      if(element.id===task.id)
        element.completed=true
    })
    setTodoList([...todoList])
  }
  return (
    <div className="App">
      <div className="create-task">
        <input onChange={handleInputChange} value={input}/>
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="show-task">
        {todoList.map((task)=><Task task={task} deleteTask={deleteTask}
        completeTask={completeTask}/>)}
      </div>
    </div>
  );
}

export default App;
