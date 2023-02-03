import './Todo.css';

function Todo(props) {
    console.log(props);
  return (
    <div className="todoItem">
      <div className="todoTitle">{props.todo.title}</div>
      <div className="todoInfos">
      <div className="todoInfos__item todoInfos__item--dueDate">{props.todo.dueDate}</div>
      <div className="todoInfos__item todoInfos__item--priority">{props.todo.priority}</div>
      </div>
    </div>
  );
}

export default Todo;