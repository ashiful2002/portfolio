import React, { useState } from "react";

import { Input } from "antd";
import Button from "../../../Components/Button";
import Card from "../../../Components/Card";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <Input
            required
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Description: </label>
          <Input
            required
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Add todo</Button>
      </form>
    </Card>
  );
};

export default NewTodo;
