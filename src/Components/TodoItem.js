import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import { useState } from "react";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { index } = props;
  const elmId = `${props.todoObj.text}_${index}`;
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="flex justify-center w-1/3 mt-3 mx-auto relative">
      <input
        className="hidden"
        type="checkbox"
        id={elmId}
        checked={isDone}
        onChange={(event) => {
          setIsDone(event.target.checked);
          dispatch(toggleTodo(index));
        }}
      />

      <label
        className="cursor-pointer bg-gray-100 w-full px-3 py-1.5"
        htmlFor={elmId}
      >
        {props.todoObj.text}
      </label>
      <button
        className=" bg-red-600 w-8 h-full flex items-center justify-center absolute right-0 top-0 p-2"
        onClick={() => dispatch(removeTodo(index))}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
