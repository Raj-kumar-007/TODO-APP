import type { FC } from "react";
import type { Todo } from "../../../types/Todo";
import TodoCard from "../todoCard/TodoCard";
import "./TodoListStyles.css";

type TodoListProps = {
    todos: Todo[]
}

const TodoList:FC<TodoListProps> = ({todos}) => {


    return (
        <div className="todo-list">
            {
                todos.map((todo) => {
                   return <TodoCard key={todo.id} todo={todo}/>
                })
            }
        </div>
    )
    
}

export default TodoList;