import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../../Components/Button";
import { Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { useUsersContext } from "./Hook/useUsersContext";

const NewUser = () => {
  const { users, setUsers } = useUsersContext();

  const [newName, setNewName] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: uuidv4(), name: newName };
    setUsers([...users, newUser]);
    setNewName("");
  };
  return (
    <div className="">
      <form onSubmit={handleFormSubmit} className="mx-auto">
        <div className="flex items-center justify-center md:m-2">
          <label htmlFor="new">New user:</label>
          <Input
            required
            type="text"
            name="new"
            id="new"
            onChange={handleNameChange}
            value={newName}
            placeholder="New User"
            className="mx-2 w-1/2 md:w-1/3"
          />
          <Button
            type="submit"
            onClick={() => {
              toast(` ${newName}  added successfully as a New user`);
            }}
          >
            Add
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewUser;
