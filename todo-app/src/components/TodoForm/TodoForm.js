import { useState } from "react";

function TodoForm(props) {
  const [todo, setTodo] = useState({ 
    title: '',
    dueDate: '',
    priority: '1'
});

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onInput ={ (e) => {setTodo({...todo, title: e.target.value}) } } />
      <input type="date" min="2023-01-01" id="dueDate" onInput={e => setTodo( {...todo, dueDate: e.target.value}) } />
      <select id="priority" onInput ={e => setTodo({...todo, priority: e.target.value}) }>
        <option value="1">Very High</option>
        <option value="2">High</option>
        <option value="3">Medium</option>
        <option value="4">Low</option>
        <option value="5">Very Low</option>
      </select>
      <input type="submit" value="Add" />
    </form>
  );
}

export default TodoForm;
