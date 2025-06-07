import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import Button from "../../../components/button/Button";
import TextField from "../../../components/textField/TextField";
import type { Todo } from "../../../types/Todo";

type props = {
    handlerSetTodos: Dispatch<SetStateAction<Todo[]>>
}

const AddTodo:FC<props> = ({handlerSetTodos}) => {

    const [todoText, setTodoText] = useState("");

    const handleClick = () =>{
       handlerSetTodos((prev) => [...prev, {id: prev.length+1, title: todoText}]);
       setTodoText("");
    }

    return (
        <div className="todo-style">
            <TextField value={todoText} onChange={(e) => setTodoText(e.target.value)} />
            <Button name="AddTodo" handler={handleClick}/>
        </div>
    )
}

export default AddTodo;