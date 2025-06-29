import { useMemo, useState } from "react";
import NavBar from "../features/navBar/NavBar";
import AddTodo from "../features/todos/addTodo/AddTodo";
import TodoList from "../features/todos/todoList/TodoList";
import useFetchData from "../hooks/useFetchData";
import "./App.css";

function App() {
  const { todos, setTodos } = useFetchData("https://dummyjson.com/products");
  const [searchText, setSearchText] = useState("");
  const filerTodos = useMemo(() => {
    return todos.filter((value) =>
      value.title.toLocaleLowerCase().includes(searchText)
    );
  }, [searchText, todos]);

  console.log(todos);
  console.log(filerTodos);

  return (
    <>
      <div className="card">
        <NavBar onSearch={setSearchText} />
        <AddTodo handlerSetTodos={setTodos} />
        <TodoList todos={filerTodos} />
      </div>
    </>
  );
}

export default App;
