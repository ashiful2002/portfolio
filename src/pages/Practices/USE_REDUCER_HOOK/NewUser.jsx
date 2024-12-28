import { Input } from "antd";
import React, { useReducer, useState } from "react";
import Button from "../../../Components/Button";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ text }) => {
  return <p>{text}</p>;
};
const NewUser = ({ onNewTodo }) => {
  const [newName, setNewName] = useState("");
  const [isModalopen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const [] = useReducer()
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const NewUser = { id: uuidv4().substring(0, 7), title: newName };
    onNewTodo(NewUser);
    setNewName("");
    setIsModalOpen(true);
    setModalText("book added");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newUser">New User</label>
        <Input
          type="text"
          name="newUser"
          id="newUser"
          value={newName}
          className="mx-2 w-1/2"
          onChange={handleNameChange}
        />
        <Button type="submit">Add New user</Button>
      </form>
      {isModalopen && <Modal text={`New Book Added`} />}
    </div>
  );
};

export default NewUser;
