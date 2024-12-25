import React, { useState } from "react";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import Toggle from "../../../Components/Toggle";
const dummytodos = [];
const HomeTodos = () => {
  const [todos, setTodos] = useState(dummytodos);

  const handleNewTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <Toggle>
    
    
    <div id="todoApp">
      <PageTitle
        heading="basic todo app"
        className="btext-[#006A55] bg-transparent text-teal-600"
      />
      <div>
        <NewTodo onTodo={handleNewTodos} />

        <Todos todos={todos} />
      </div>
    </div>
    </Toggle>
  );
};

export default HomeTodos;
