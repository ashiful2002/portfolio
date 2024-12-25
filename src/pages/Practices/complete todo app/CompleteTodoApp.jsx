import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Button from "../../../Components/Button";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import Toggle from "../../../Components/Toggle";

const CompleteTodo = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <>
      <Section id="completeTodoApp">
        <PageTitle heading="Complete Toto app" />

        <Toggle>
          <div className="flex flex-col items-center justify-center">
            <NewTodo onAddTodo={handleAddTodo} />
            {todos && <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />}
            {todos && (
              <Button
                varient="asdf"
                onClick={() => {
                  setTodos([]);
                }}
              >
                Clear All todos
              </Button>
            )}
          </div>
        </Toggle>
      </Section>
    </>
  );
};

export default CompleteTodo;
