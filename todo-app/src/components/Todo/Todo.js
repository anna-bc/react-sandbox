import "./Todo.css";

function Todo(props) {
  console.log(props);
  return (
    <div className={"todoItem todoItem--" + props.todo.priority.value}>
      <div className="todoTitle">{props.todo.title}</div>
      <div className={"todoInfos todoInfos--" + props.todo.priority.value}>
        <div className="todoInfos__item todoInfos__item--dueDate">
          {props.todo.dueDate}
        </div>
        <div className="todoInfos__item todoInfos__item--doneBtn">
          <button onClick={() => {
            console.log(props.todo);
            props.removeTodo(props.todo);
          }}>Done</button>
        </div>
        <div className="todoInfos__item todoInfos__item--priority">
          {props.todo.priority.prioText}
        </div>
      </div>
    </div>
  );
}

export default Todo;
