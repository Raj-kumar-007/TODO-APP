import { useEffect, useState } from "react";
import type { Todo } from "../types/Todo";
import { fetchTodos } from "../services/todoService";

const useFetchData = (url:string) => {
    
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const data = async() => {
         const todoData = await fetchTodos(url);
         setTodos(todoData as Todo[]);
        }
        data();
    }, []);

    return {todos, setTodos};
}

export default useFetchData;