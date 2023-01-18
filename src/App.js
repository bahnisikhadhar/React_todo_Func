import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const localInput = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState(localInput);
  const [editTodo,setEditTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app_wrapper">
      <div className="header">
        <h1>Todo List</h1>
    </div>
    <Form 
      input = {input}
      setInput = {setInput}
      todos = {todos}
      setTodos = {setTodos}
      editTodo = {editTodo}
      setEditTodo = {setEditTodo}
    />
     <div>
        <TodoList todos = {todos} setTodos = {setTodos} setEditTodo = {setEditTodo} />
      </div>
      </div>
     
    </div>
  );
}

export default App;
