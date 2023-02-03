import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

function Body() {
    const [todos, setTodos] = useState([]);
    return (
    <div className="bodyWrapper">
        <TodoForm addTodo={todo => setTodos([...todos, todo])} />
        <TodoList todos={todos} />
    </div>
    );
}

export default Body;