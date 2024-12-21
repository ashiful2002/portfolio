import React from "react";

import Button from "../../../Components/Button";
import { FaTrash } from "react-icons/fa";
import Card from "../../../Components/Card";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <article>
      <Card className="border-none">
        <div className="mx-2 flex items-center justify-between">
          <div>
            {" "}
            <h3 className="capitalize">{title}</h3>
            <p className="capitalize">{desc}</p>
          </div>
          <div>
            <Button 
            varient="delete"
              onClick={() => {
                handleClick(id);
              }}
            >
              <FaTrash />
            </Button>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Todo;
