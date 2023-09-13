import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button
        className="btn"
        type="submit"
        onClick={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        Go
      </button>
    </div>
  );
};

export default InputField;
