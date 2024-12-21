import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";

import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Button from "../../../Components/Button";

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
    <Section>
      <div className="flex flex-col items-center justify-center">
      < PageTitle heading="Complete Toto app" className="bg-transparent text-teal-600"/>
        <NewTodo onAddTodo={handleAddTodo} />
        {todos && <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />}
        <Button
          varient="asdf"
                    onClick={() => {
            setTodos([]);
          }}
        >
          Clear All todos
        </Button>
      </div>
    </Section>
  );
};

export default CompleteTodo;
