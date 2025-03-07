import React from "react";

import Todo from "./Todo";

const Todos = ({ onRemoveTodo, todos }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <>
          <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            onRemoveTodo={onRemoveTodo}
          />
        </>
      ))}
    </section>
  );
};

export default Todos;
