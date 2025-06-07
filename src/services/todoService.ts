import axios from "axios"
import type { Todo } from "../types/Todo";

export const fetchTodos = async (url: string) => {
    const todos:Todo[] = await axios.get(url).then(result => result.data).then(result => result.products).catch(err => console.log(err));
    return todos;
}