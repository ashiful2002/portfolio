import React, { useContext } from "react";
import Card from "../../../../Components/Card";
import { FaUser } from "react-icons/fa6";
import Button from "../../../../Components/Button";
import { UsersContext } from "./Hook/UserContext";
import { useUsersContext } from "./Hook/useUsersContext";

const User = ({ user }) => {
  const { name, id } = user;

  const { users, setUsers } = useUsersContext();

  const deleteUser = (id) => {
    const filtereduser = users.filter((user) => user.id !== id);
    setUsers(filtereduser);
  };
  return (
    <Card>
      <div className="flex items-center">
        <FaUser className="m-3 inline text-4xl" />
        <div className="">
          <h5 className="capitalize">name : {name}</h5>
          <span className="">Id: {id.substring(0, 7)}</span>
        </div>
      </div>
      <Button
        className="ml-[275px]"
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
