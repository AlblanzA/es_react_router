import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Stato per la lista di TODO
  const [inputValue, setInputValue] = useState(""); // Stato per l'input

  // Aggiunge un nuovo TODO
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Pulisce il campo input
    }
  };

  const resetTodos = () => {
    setTodos([]);
  };

  // Rimuove un TODO specifico
  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Aggiorna l'input
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={resetTodos}>Reset</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
