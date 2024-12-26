import React from "react";
import Card from "../../../../Components/Card";
import { FaUser } from "react-icons/fa6";
import Button from "../../../../Components/Button";

const User = ({ user, handleDeleteUser }) => {
  const { name, id } = user;
  const deleteUser = (id) => {
    handleDeleteUser(id);
  };
  return (
    <Card className="flex items-center justify-around ">
      <FaUser className="mx-3 inline" />
      <div>
        <h2 className="inline capitalize">name : {name}</h2>
        <p>Id: {id}</p>
      </div>
      <Button
        varient="df"
        onClick={() => {
          deleteUser(user.id);
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default User;
