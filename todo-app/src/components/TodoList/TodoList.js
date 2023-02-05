import "./TodoList.css";
import Todo from "../Todo/Todo";

import { useState } from "react";

function TodoList(props) {

  const sortByPriority = (e) => {
    console.log(props.todos);
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < props.todos.length; i++) {
        if (props.todos[i - 1].priority.value > props.todos[i].priority.value) {
          done = false;
          let tmp = props.todos[i - 1];
          props.todos[i - 1] = props.todos[i];
          props.todos[i] = tmp;
        }
      }
    }
  };

//   const showList = (todos) => {
//     {todos.map((el, i) => (
//         <li key={"todo-" + i}>
//           <Todo
//             todo={el}
//             removeTodo={(todo) => {
//               let idx = todos.indexOf(todo);
//               console.log(idx);
//               props.removedTodoIdx(idx);
//             }}
//           />
//         </li>
//       ))}
//   }

  console.log(props);
  return (
    <div className="listWrapper">
      <ul>
        {props.todos.map((el, i) => (
          <li key={"todo-" + i}>
            <Todo
              todo={el}
              removeTodo={(todo) => {
                let idx = props.todos.indexOf(todo);
                console.log(idx);
                props.removedTodoIdx(idx);
              }}
            />
          </li>
        ))}
      </ul>
      <button id="sortByPrio" onClick={sortByPriority}>
        Sort by Priority
      </button>
    </div>
  );
}

export default TodoList;
