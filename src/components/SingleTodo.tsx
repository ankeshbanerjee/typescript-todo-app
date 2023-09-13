import React, { useState, useRef, useEffect } from "react";
import Todo from "../model/Todo";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";

interface Props {
  todoItem: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todoItem, todos, setTodos }) => {
  const { todo, _id, isDone } = todoItem;
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDone = (): void => {
    setTodos(
      todos.map((it) => (it._id === _id ? { todo, _id, isDone: !isDone } : it))
    );
    console.log(todos);
  };

  const handleDelete = (): void => {
    setTodos(todos.filter((it) => it._id !== _id));
  };

  const handleEdit = (): void => {
    setEdit((prev) => !prev);
    setTodos(
      todos.map((it) =>
        it._id === _id ? { todo: editedTodo, _id, isDone } : it
      )
    );
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div className="list-item">
      {!isDone ? (
        !edit ? (
          <span className="todo-text">{todo}</span>
        ) : (
          <input
            className="edit-input"
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            ref={inputRef}
          />
        )
      ) : (
        <s>{todo}</s>
      )}
      <div className="modifiers">
        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={handleDelete}>
          <BsFillTrashFill />
        </span>
        <span className="icon" onClick={handleDone}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
