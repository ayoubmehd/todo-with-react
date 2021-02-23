import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/actions";

function Form() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <form
      className="flex justify-center mt-3"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(text));
      }}
    >
      <input
        className="border-2 py-1 px-2 mr-1"
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      <button className="text-white bg-gray-600 rounded-sm py-1 px-2.5 ml-1">
        Add Todo
      </button>
    </form>
  );
}

export default Form;
