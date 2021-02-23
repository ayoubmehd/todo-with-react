import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/actions";

function Form() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(text));
      }}
    >
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <button>Add Todo</button>
    </form>
  );
}

export default Form;
