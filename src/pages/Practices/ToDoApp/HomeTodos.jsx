import React, { useState } from "react";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import Toggle from "../../../Components/Toggle";
import Section from "../../../Components/Title.jsx/Section";
const dummytodos = [];
const HomeTodos = () => {
  const [todos, setTodos] = useState(dummytodos);

  const handleNewTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <Section id="todoApp">
      <PageTitle
        heading="basic todo app"
        className=""
      />
      <Toggle>
        <div>
          <NewTodo onTodo={handleNewTodos} />

          <Todos todos={todos} />
        </div>
      </Toggle>
    </Section>
  );
};

export default HomeTodos;
