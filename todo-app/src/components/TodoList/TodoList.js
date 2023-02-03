import './TodoList.css';
import Todo from "../Todo/Todo";

function TodoList(props) {
    console.log(props);
    return (
        <ul>
        {props.todos.map((el, i) => 
        <li key={"todo-" + i}>
            <Todo todo={el} />
        </li>)
    }
    </ul>
    );
}

export default TodoList;