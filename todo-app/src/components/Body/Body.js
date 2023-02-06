import "./Body.css";

import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

function Body() {
  const [todos, setTodos] = useState([]);

  function handleSortClick() {
    console.log(todos);
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < todos.length; i++) {
        if (todos[i - 1].priority.value > todos[i].priority.value) {
          done = false;
          let tmp = todos[i - 1];
          todos[i - 1] = todos[i];
          todos[i] = tmp;
        }
      }
    }
    setTodos([...todos]);
  }

  return (
    <div className="bodyWrapper">
      <TodoForm addTodo={(todo) => setTodos([...todos, todo])} />
      <TodoList
        todos={todos} onSortClick={() => handleSortClick}
        removedTodoIdx={(idx) => {
          let newTodos;
          newTodos = todos.filter((el, i) => idx !== i);
          setTodos(newTodos);
          console.log(todos);
        }}
      />
    </div>
  );
}

export default Body;
