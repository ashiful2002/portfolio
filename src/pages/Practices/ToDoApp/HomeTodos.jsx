import React, { useState } from "react";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
const dummytodos = [
  
  
];
const HomeTodos = () => {
  const [todos, setTodos] = useState(dummytodos);

  const handleNewTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return ( 
    <div>
      <PageTitle
        heading="basic todo app"
        className="text-teal-600 btext-[#006A55] bg-transparent"
      />
      <div>
        <NewTodo onTodo={handleNewTodos} />

        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default HomeTodos;
