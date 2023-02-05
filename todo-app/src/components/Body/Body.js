import './Body.css';

import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

function Body() {
    const [todos, setTodos] = useState([]);
    return (
    <div className="bodyWrapper">
        <TodoForm addTodo={todo => setTodos([...todos, todo])} />
        <TodoList todos={todos} removedTodoIdx={(idx) => {
            let newTodos;
            let spliced = todos.splice(idx, 1);
            newTodos = todos;
            setTodos(newTodos);
            console.log(todos);
        }} />
    </div>
    );
}

export default Body;