import React from 'react';
import { useState, useEffect } from 'react';

const Todo = () => {
const [todos,setTodos] = useState([]);
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) { setTodos(savedTodos); }
  }, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

const addTodo = (event) => {
  event.preventDefault(); 

  const data = event.target;

  const newTodo = {
    task: data.task.value,
    date: data.date.value,  
    time: data.time.value 
  };
  setTodos([...todos, newTodo]);
  data.reset();
}

  const deleteTodo = (index) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
};
  return (
    <div>
      <form onSubmit={addTodo} >
        <label task="task">Task Title</label>
        <input type="text"  className='form-control' name="task"/>
        <br/>
        <label date="date">Date</label>
        <input type="date"  className='form-control' name="date"/>
        <br/>
        <label time="time">Time</label>
        <input type="time"  className='form-control' name="time"/>
        <br/>
        <button type="submit" className='btn btn-success'>Add Task</button>
      </form>
      <ul>
        {todos.map((item,index)=>(
        <li key={index}>
        {item.task} at {item.time},date: {item.date}<button onClick={() => deleteTodo(index)} className='btn btn-danger'>Delete</button>
        </li>))}</ul>
    </div>
  )
}

export default Todo;
