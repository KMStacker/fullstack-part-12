import React from 'react'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map(todo => {
        <Todo
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
