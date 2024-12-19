import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "antd";

import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
const newId = uuidv4();

const NewTodo = ({ onTodo }) => {
  const [todo, setTodo] = useState("");
  //   const [age, setAge] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //   const handleAgeChange = (e) => {
  //     setAge(e.target.value);

  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    onTodo({ todo });
    // console.log(todo);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo:</label>
        <input
          required
          className="p-1 rounded-md mx-2 focus:border-none text-black"
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleChange}
        />
        {/* <label htmlFor="age">Age:</label>
        <Input required
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={handleAgeChange}
        /> */}

        <Button type="submit">Add</Button>
        {/* <button type="submit">submit</button> */}
      </form>
    </Card>
  );
};

export default NewTodo;
