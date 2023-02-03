function TodoList(props) {
    return (
        <ul>
            {props.todos.map((el, i) => <li key={el + "-" + i}>
                <h3>{el.title}</h3>
                <p>{el.dueDate}</p>
                <div>{el.priority}</div>
            </li>)}
        </ul>
    );
}

export default TodoList;