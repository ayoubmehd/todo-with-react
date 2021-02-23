import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import { useState } from "react";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { index } = props;
  const elmId = `${props.todoObj.text}_${index}`;
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        id={elmId}
        checked={isDone}
        onChange={(event) => {
          setIsDone(event.target.checked);
          dispatch(toggleTodo(index));
        }}
      />

      <label htmlFor={elmId}>{props.todoObj.text}</label>
      <button onClick={() => dispatch(removeTodo(index))}>X</button>
    </div>
  );
}

export default TodoItem;
