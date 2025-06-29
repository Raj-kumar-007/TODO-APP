import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import Button from "../../../components/button/Button";
import TextField from "../../../components/textField/TextField";
import type { Todo } from "../../../types/Todo";
import "./AddTodoStyle.css";

type props = {
  handlerSetTodos: Dispatch<SetStateAction<Todo[]>>;
};

const AddTodo: FC<props> = ({ handlerSetTodos }) => {
  const [todoText, setTodoText] = useState("");

  const handleClick = () => {
    if (todoText.trim() !== "") {
      handlerSetTodos((prev) => [
        ...prev,
        { id: prev.length + 1, title: todoText },
      ]);
      setTodoText("");
    }
  };

  return (
    <div className="todo-Style">
      <TextField
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        style={{ borderRadius: "20px", width: "45%" }}
        placeholder="Please enter text to add a todo"
      />
      <Button name="AddTodo" handler={handleClick} />
    </div>
  );
};

export default AddTodo;
