import React from 'react'
import SingleTodo from "./SingleTodo"
import Todo from '../model/Todo'

interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos} : Props) => {
  return (
    <div className='list-container'>
      {
        todos.map((i)=>
            <SingleTodo todoItem={i} todos={todos} setTodos={setTodos} />
        )
      }
    </div>
  )
}

export default TodoList
