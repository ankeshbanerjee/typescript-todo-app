import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import "./components/styles.css";
import Todo from "./model/Todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { todo, _id: Date.now(), isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div>
      <p className="header">Taskify</p>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
