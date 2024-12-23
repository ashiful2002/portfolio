import React from "react";
import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import { FaTrash } from "react-icons/fa6";
const Todos = ({ todos }) => {
  
  return (
    <div>
      {todos.map(({ todo, index }) => (
        <Card key={index} className="flex items-center justify-between">
          <ul>
            <li className="capitalize">{todo}</li>
          </ul>
          <Button
            varient="red"
            
          >
            <FaTrash />
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Todos;
