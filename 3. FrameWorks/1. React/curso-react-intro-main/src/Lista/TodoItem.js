import './TodoItem.css';
import { DeleteIcon } from "./DeleteIcon";
import { CompleteIcon } from "./CompleteIcon";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p-completed"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
  