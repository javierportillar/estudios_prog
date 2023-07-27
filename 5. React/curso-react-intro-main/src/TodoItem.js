import './TodoItem.css'
import { DeleteIcon } from "./DeleteIcon";
import { CompleteIcon } from "./CompleteIcon";

function TodoItem(props){
  return(
    <li className="TodoItem">
      <CompleteIcon/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p-completed"} `}>{props.text}</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export{TodoItem}

  