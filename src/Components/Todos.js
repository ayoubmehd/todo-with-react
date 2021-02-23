import Form from "./Form";
import TodoItem from "./TodoItem";
import { useSelector, connect } from "react-redux";
import { removeTodo } from "../redux/actions";

function Todos() {
  const state = useSelector((state) => state);

  const items = state.todos.map((item, index) => (
    <TodoItem todoObj={item} key={index} index={index} />
  ));
  return (
    <div>
      <Form />
      {items}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = { removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
