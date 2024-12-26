import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../../Components/Button";
import { Input } from "antd";

const NewUser = ({ handleAddNewUser }) => {
  const [newName, setNewName] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: uuidv4(), name: newName };
    handleAddNewUser(newUser);
    setNewName("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new">New user:</label>
        <Input
          required
          type="text"
          name="new"
          id="new"
          onChange={handleNameChange}
          value={newName}
          placeholder="New User"
          className="mx-2 w-1/2"
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default NewUser;
