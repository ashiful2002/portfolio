import React from "react";
import Card from "../../../Components/Card";
const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map(({  todo,index }) => (
        <Card key={index}>
          <ul>
            <li className="capitalize">{todo}</li>
          </ul>
        </Card> 
      ))}
    </div>
  );
};

export default Todos;
