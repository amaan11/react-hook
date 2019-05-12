import React, { useState } from "react";
import "./App.css";

function App() {
  // In React Class Component we create and set state using this

  // state = {
  //   todos: [
  //     { text: "Task 1" },
  //     { text: "Task 2" },
  //     { text: "Task 3" },
  //     { text: "Task 4" }
  //   ]
  // };

  // setTodos=()=>{this.setState({})}

  // But in functional component to have a local state we use react hooks

  const [todos, setTodos] = useState([
    { text: "Task 1", isCompleted: false },
    { text: "Task 2", isCompleted: false },
    { text: "Task 3", isCompleted: false },
    { text: "Task 4", isCompleted: false }
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodos(value);
    setValue("");
  };

  const addTodos = value => {
    const newTodos = [...todos];
    newTodos.push({ text: value });
    setTodos(newTodos);
  };
  const deleteTodo = index => {
    const anotherTodos = [...todos];
    anotherTodos.splice(index, 1);
    setTodos(anotherTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    // console.log(newTodos[index]);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Task"
            className="input-field"
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </form>
        {todos.map((todo, index) => {
          return (
            <div key={index}>
              <div
                className="todo"
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : ""
                }}
              >
                {todo.text}{" "}
              </div>
              <button
                type="button"
                className="complete-btn"
                onClick={() => completeTodo(index)}
              >
                Complete
              </button>
              <button type="button" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          );
        })}
        {console.log(todos)}{" "}
      </div>
    </div>
  );
}

export default App;
