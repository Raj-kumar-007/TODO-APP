import type { FC } from "react";
import type { Todo } from "../../../types/Todo";
import "./TodoCardStyle.css"

type Props= { todo: Todo}

const TodoCard:FC<Props> = ({todo}) => {
    return (
        <div className="todo-card" key = {todo.id}>
            <p> {todo.title }</p>
        </div>
    )
}

export default TodoCard;