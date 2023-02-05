import "./TodoForm.css";

import { useState } from "react";

function TodoForm(props) {
  const [todo, setTodo] = useState({
    title: "",
    dueDate: "",
    priority: {
      value: "1",
      prioText: "Very High",
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        type="textarea"
        placeholder="What do you have to do?"
        onInput={(e) => {
          setTodo({ ...todo, title: e.target.value });
        }}
      />
      <div className="todoInfos">
        <input className="todoInfos__item"
          type="date"
          min="2023-01-01"
          id="dueDate"
          onInput={(e) => setTodo({ ...todo, dueDate: e.target.value })}
        />
        <select className="todoInfos__item"
          id="priority"
          onInput={(e) =>
            setTodo({
              ...todo,
              priority: {
                value: e.target.value,
                prioText: e.target.options[e.target.selectedIndex].text,
              },
            })
          }
        >
          <option value="1">Very High</option>
          <option value="2">High</option>
          <option value="3">Medium</option>
          <option value="4">Low</option>
          <option value="5">Very Low</option>
        </select>
      </div>
      <input id="addBtn" type="submit" value="Add" />
    </form>
  );
}

export default TodoForm;
